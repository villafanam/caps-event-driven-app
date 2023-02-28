
# LAB - Class 11

## Project: caps-system

### Author: Marco Villafana

### Problem Domain  

 Setup a pool of events and handler functions, with the intent being to refactor parts of the system throughout the week, but keep the handlers themselves largely the same.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/villafanam/caps-event-driven-app/actions) 
- [GitHub PR](https://github.com/villafanam/caps-event-driven-app/pull/2)
- [back-end server url](https://caps-event-driven-app.onrender.com) 

### Setup

`npm install`

#### How to initialize/run your application (where applicable)

- e.g. `node hub.js`

#### Features / Routes

- Hub.js
  - Implement a Module for a Global Event Pool
  - Implement a Module for Managing Global Package Events

- Vendor
  - Implement a Module for Managing Vendor Events

- Driver
  - Implement a Module for Managing Driver Events

#### Tests

- Driver-handler test
  - logs and emits IN-TRANSIT payload

#### UML

![lab 11 UML](/assets/lab11_uml.png)
