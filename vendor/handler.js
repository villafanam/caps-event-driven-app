const eventPool = require('../eventPool');

// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

module.exports = (storeName) => {
  const  payload = {
    store: storeName,
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  eventPool.emit('PICKUP', payload);
};
