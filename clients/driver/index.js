const { pickupAndDeliver } = require('./handler');

// const { io } = require('socket.io-client');
// const socket  = io('http://localhost:3001/caps');
const { socket } = require('../socket');

// As a driver, I want to be notified when there is a package to be delivered.
socket.on('PICKUP', pickupAndDeliver);


