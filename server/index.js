'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

// Logs a timestamp and the payload of every event.
function logger(event, payload) {
  const timestamp = new Date().toISOString();
  console.log('EVENT:', {event, timestamp, payload});
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
    console.log('these are the rooms', socket.adapter.rooms);
    console.log('---payload is the room--', room);
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
    //logger('PICKUP', payload);
    //caps.emit('PICKUP', payload);
    socket.broadcast.emit('PICKUP', payload);
  });

  socket.on('IN-TRANSIT', (payload) => {
    //logger('IN-TRANSIT', payload);
    // caps.emit('IN-TRANSIT', payload);
    socket.broadcast.emit('IN-TRANSIT', payload);
  });

  socket.on('DELIVERED', (payload) => {
    //logger('DELIVERED', payload);
    // caps.emit('DELIVERED', payload);
    socket.broadcast.emit('DELIVERED', payload);
  });

});

server.listen(PORT);