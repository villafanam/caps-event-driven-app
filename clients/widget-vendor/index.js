
const { createPackage, thankDriver } = require('./handler');
const { socket } = require('../socket');

let store = 'acme-widgets';

socket.emit('JOIN', store);
socket.emit('GET-ALL', { queueId: store });

socket.on('DELIVERED', (payload) => {
  confirmDelivery(payload);
  socket.emit('RECEIVED', payload);
});

// responds by logging a message to the console:
function confirmDelivery(payload) {
  setTimeout(() => {
    thankDriver(payload);
  }, 1000);
}


// createPackage();
// createPackage();
// createPackage();

setInterval(() => {
  createPackage();
}, 2000);

