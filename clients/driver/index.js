const { pickupAndDeliver } = require('./handler');

// const { io } = require('socket.io-client');
// const socket  = io('http://localhost:3001/caps');
const { socket } = require('../socket');

// Listens for a pickup event from the Global Event Pool and responds with the following:
socket.on('PICKUP', pickupAndDeliver);


