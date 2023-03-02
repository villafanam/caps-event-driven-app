'use strict';

const socket = require('../socket.js');
const { createPackage, thankDriver } = require('./handler');

// jest.mock('../socket.js', () => {
//   return {
//     on: jest.fn(),
//     emit: jest.fn(),
//   };
// });
socket.emit = jest.fn();
console.log = jest.fn();

describe('Vendor', () => {
  let payload = {
    store: '1-206-flowers',
    orderId: 'test123',
    customer: 'Ryan',
    address: 'home',
    queueId: '1-206-flowers',
  };
  
  it('emits an order as expected', () => {
    createPackage(payload);
    expect(console.log).toHaveBeenCalledWith('VENDOR: order ready for pickup');
    expect(socket.emit).toHaveBeenCalledWith('PICKUP', payload);
  });

  it('thanks driver', () => {
    thankDriver(payload);
    expect(console.log).toHaveBeenCalledWith('Thank you for ordering!', payload.customer);

  });
});
