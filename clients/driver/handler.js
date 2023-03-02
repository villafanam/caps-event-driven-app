// const { io } = require('socket.io-client');
// const socket  = io('http://localhost:3001/caps');
const { socket } = require('../socket');


function pickupAndDeliver(payload) {
  setTimeout(() => {
    pickup(payload);
  }, 5000);

  setTimeout(() => {
    delivery(payload);
  }, 8000);

}

function pickup(payload) {
  // As a driver, I want to alert the system when I have picked up a package and it is in transit.
  console.log(`DRIVER: picked up: ${payload.orderId}`);
  socket.emit('IN-TRANSIT', payload);
}

function delivery(payload) {
  // As a driver, I want to alert the system when a package has been delivered.
  console.log(`DRIVER: delivered ${payload.orderId}`);
  socket.emit('DELIVERED', payload);

}

module.exports = { pickup, delivery, pickupAndDeliver };