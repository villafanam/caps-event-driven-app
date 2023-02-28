const eventPool = require('../eventPool');
const handler = require('./handler');

eventPool.on('PICKUP', (payload) => {
  setTimeout(() => {
    handler(payload);
  }, 1000);
});


