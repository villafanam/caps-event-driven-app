'use strict';

// bring in the object to be mocked
const eventPool = require('../eventPool');
const handler= require('./handler');

// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();

// actually set up the mock with an object to replace the imported object above
// jest.mock('../eventPool.js', () => {
//   return {
//     on: jest.fn(),
//     emit: jest.fn(),
//   };
// });
// console.log = jest.fn();
// eventPool.emit = jest.fn();


// describe('Handle driver', () => {
//   it('logs and emits IN-TRANSIT payload', () => {
//     const  payload = {
//       store: chance.company(),
//       orderId: chance.guid(),
//       customer: chance.name(),
//       address: chance.address(),
//     };

//     handler(payload);
//     expect(console.log).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderId}`);
//     expect(eventPool.emit).toHaveBeenCalledWith('IN-TRANSIT', payload);
//   });
// });
