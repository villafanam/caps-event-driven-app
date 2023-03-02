
const { socket } = require('../socket');

// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

function createPackage(payload = null){
  if (!payload) {
    payload = {
      store: 'acme-widgets',
      orderId: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
      //messageId: chance.guid(),
      queueId: 'acme-widgets',
    };
  }

  // not required, but maybe useful for debugging
  console.log('VENDOR: order ready for pickup');
  socket.emit('PICKUP', payload);
}

function thankDriver(payload){
  console.log('Thank you for ordering!', payload.customer);
  //process.exit();
}

module.exports = {
  createPackage,
  thankDriver,
};