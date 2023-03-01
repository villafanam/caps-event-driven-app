const eventPool = require('../eventPool');
const { createPackage, thankDriver } = require('./handler');


eventPool.on('DELIVERED', confirmDelivery);

// responds by logging a message to the console:
function confirmDelivery() {
  setTimeout(() => {
    thankDriver();
  }, 1000);
}

setInterval(() => {
  createPackage();
}, 5000);
