
// const { io } = require('socket.io-client');
// const socket  = io('http://localhost:3001/caps');
const { socket } = require('../socket');

// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

function createPackage(payload = null){
  if (!payload) {
    payload = {
      store: '1-206-flowers',
      orderId: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
    };
  }

  // not required, but maybe useful for debugging
  console.log('VENDOR: we have an order ready');
  socket.emit('PICKUP', payload);
}

function thankDriver(){
  console.log('Thank you for ordering!');
  process.exit();
}

module.exports = {
  createPackage,
  thankDriver,
};