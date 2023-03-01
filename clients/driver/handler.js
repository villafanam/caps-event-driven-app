// const { io } = require('socket.io-client');
// const socket  = io('http://localhost:3001/caps');
const { socket } = require('../socket');

// Listens for a pickup event from the Global Event Pool and responds with the following:
// eventPool.on('PICKUP', pickupAndDeliver);


function pickupAndDeliver(payload) {
  setTimeout(() => {
    pickup(payload);
  }, 1000);

  setTimeout(() => {
    delivery(payload);
  }, 2000);

}

function pickup(payload) {
  // Log a message to the console: DRIVER: picked up <ORDER_ID>.
  console.log(`DRIVER: picked up: ${payload.orderId}`);
  // Emit an in-transit event to the Global Event Pool with the order payload.
  socket.emit('IN-TRANSIT', payload);
}

function delivery(payload) {
  // Log a confirmation message to the console: DRIVER: delivered <ORDER_ID>.
  console.log(`DRIVER: delivered ${payload.orderId}`);
  // Emit a delivered event to the Global Event Pool with the order payload.
  socket.emit('DELIVERED', payload);

}

module.exports = { pickup, delivery, pickupAndDeliver };