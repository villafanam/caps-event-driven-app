const eventPool = require('../eventPool');
const { pickupAndDeliver } = require('./handler');

// Listens for a pickup event from the Global Event Pool and responds with the following:
eventPool.on('PICKUP', pickupAndDeliver);


