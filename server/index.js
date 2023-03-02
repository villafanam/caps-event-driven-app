'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const Queue = require('./lib/queue');
const messageQueue = new Queue();

// Logs a timestamp and the payload of every event.
function logger(event, payload) {
  //const timestamp = new Date().toISOString();
  const orderId = payload.orderId;
  console.log('EVENT:', {event, orderId, payload});
}

// socket server singleton:  listening for events at http://localhost:3001
const server = new Server();

// create a namespace
// listening for events at http://localhost:3001/caps
const caps = server.of('/caps');

//create / allow for connections
caps.on('connection', (socket) => {
  console.log('Socket connected to Caps namespace!', socket.id);

  // how to join a room
  socket.on('JOIN', (room) => {
    // console.log('these are the rooms', socket.adapter.rooms);
    // console.log('---payload is the room--', room);
    socket.join(room);
    console.log(`You've joined the ${room} room`);
    console.log('these are the rooms', socket.adapter.rooms);
    // how to send to a room, play around with it
    // socket.to(room).emit('some message');
  });

  //listen to all events

  //logs all events
  socket.onAny((event, payload) => {
    logger(event, payload);
  });

  socket.on('PICKUP', (payload) => {
    
    let currentQueue = messageQueue.read(payload.queueId);

    if(!currentQueue){
      let queueKey = messageQueue.store(payload.queueId, new Queue());
      currentQueue = messageQueue.read(queueKey);
      // first time currentQueue = {};
    }
    
    currentQueue.store(payload.orderId, payload);
    
    setTimeout(() => {
      socket.broadcast.emit('PICKUP', payload);
    }, 5000);
    
  });

  socket.on('IN-TRANSIT', (payload) => {
    socket.broadcast.emit('IN-TRANSIT', payload);
  });

  socket.on('DELIVERED', (payload) => {
    
    let currentQueue = messageQueue.read(payload.queueId);

    if(!currentQueue){
      let queueKey = messageQueue.store(payload.queueId, new Queue());
      currentQueue = messageQueue.read(queueKey);
      // first time currentQueue = {};
    }
    
    currentQueue.store(payload.orderId, payload);

    socket.broadcast.emit('DELIVERED', payload);
  });

  socket.on('RECEIVED', (payload) => {
    console.log('Server RECEIVED event', payload);
    
    let currentQueue = messageQueue.read(payload.queueId);
    if(!currentQueue){
      throw new Error('we have orders but no queue');
    }

    let order = currentQueue.remove(payload.orderId);
    socket.emit('PICKUP', order);
  });

  socket.on('GET-ALL', (payload) => {
    console.log('attempting to get orders');
    let currentQueue = messageQueue.read(payload.queueId);

    if(currentQueue &&  currentQueue.data)
    {
      Object.keys(currentQueue.data).forEach(orderId => {
        //emit PICKUP if message are meant for the driver else emit DELIVERED if message meant for the vendor 
        if(payload.id === 'driver')
        {
          socket.emit('PICKUP', currentQueue.read(orderId));
        }
        else
        {
          socket.emit('DELIVERED', currentQueue.read(orderId));
        }
      });
    }
  });

});

server.listen(PORT);