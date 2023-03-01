const eventPool = require('./eventPool');
// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

//handlers
require('./vendor');
require('./driver');


//listen to all events
eventPool.on('PICKUP', (payload) => {
  logger('PICKUP',payload);
});

eventPool.on('IN-TRANSIT', (payload) => {
  logger('IN-TRANSIT',payload);
});

eventPool.on('DELIVERED', (payload) => {
  logger('DELIVERED',payload);
});

// Logs a timestamp and the payload of every event.
function logger(event, payload) {
  const timestamp = new Date().toISOString();
  console.log('EVENT:', {event, timestamp, payload});
}


// const start = () => {
//   setInterval(() => {
//     let store = chance.company();
//     eventPool.emit('VENDOR', store);
//   }, 5000);
// };

// start();