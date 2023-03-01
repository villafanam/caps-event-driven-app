
const { createPackage, thankDriver } = require('./handler');
// const { io } = require('socket.io-client');
// const socket  = io('http://localhost:3001/caps');
const { socket } = require('../socket');

socket.on('DELIVERED', (payload) => {
  confirmDelivery(payload);
});

// responds by logging a message to the console:
function confirmDelivery(payload) {
  setTimeout(() => {
    thankDriver(payload);
  }, 1000);
}

let store = '1-206-flowers';
socket.emit('JOIN', store);

setInterval(() => {
  createPackage();
}, 5000);
