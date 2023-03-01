
# LAB - Class 12

## Project: Socket.io

### Author: Marco Villafana

### Problem Domain  

- Refactor lab 11 to use the Socket.io libraries. This will allow communication between Server and Client applications

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/villafanam/caps-event-driven-app/actions) 
- [GitHub PR](https://github.com/villafanam/caps-event-driven-app/pull/2)
- [back-end server url](https://caps-event-driven-app.onrender.com) 

### Setup

`npm install`

#### How to initialize/run your application (where applicable)

1. `node server/index.js`
2. `node clients/driver/index.js`
3. `node clients/vendor/index.js`

#### Features / Routes

- server.js
  - Configure a Global Event Pool that every client socket should listen for:
  - `PICKUP` - this will be broadcast to all sockets.
  - `IN-TRANSIT` - this will be emitted only to Vendors that have - joined the appropriate room.
  `DELIVERED` - this will be be emitted only to Vendors that have - joined the appropriate room.

- Vendor
  - Connects to the CAPS Application Server using `socket.io-client`
  - Upon connection, simulate a new customer order
  - Listen for the delivered event coming in from the CAPS server.
  - After the delivery event has been received, exit the application using `process.exit()`.

- Driver
  - Connects to the CAPS Application Server using `socket.io-client`
  - Once connected, the Driver client module should listen for any appropriate events from the Serve
  - Simulate the following events and emit payloads to the CAPS Application Server upon receiving a “PICKUP” event
    - `IN-TRANSIT`
    - `DELIVERED`

#### Tests

- Driver-handler test
  - logs and emits IN-TRANSIT payload

#### UML


