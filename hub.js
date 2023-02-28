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
  console.log({
    event: 'pickup',
    time: new Date().toISOString(),
    payload,
  });
});

eventPool.on('IN-TRANSIT', (payload) => {
  console.log({
    event: 'IN-TRANSIT',
    time: new Date().toISOString(),
    payload,
  });

  eventPool.emit('DELIVERED', payload);
});

eventPool.on('DELIVERED', (payload) => {
  console.log(`DRIVER: delivered ${payload.orderId}`);
  console.log(`Thank you, ${payload.customer}`);
  console.log({
    event: 'DELIVERED',
    time: new Date().toISOString(),
    payload,
  });

  
});


const start = () => {
  setInterval(() => {
    let store = chance.company();
    eventPool.emit('VENDOR', store);
  }, 5000);
};

start();