const eventPool = require('../eventPool');

module.exports = (payload) => {
  console.log(`DRIVER: picked up ${payload.orderId}`);
  eventPool.emit('IN-TRANSIT', payload);
};