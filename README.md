
# LAB - Class 13

## Project: Message Queues

### Author: Marco Villafana

### Problem Domain  

- Implement a system to guarantee that notification payloads are read by their intended subscriber. 
- Implement a “Queue” system so that nothing gets lost. Every event sent will be logged and held onto by the server until the intended recipient acknowledges that they received the message. At any time, a subscriber can get all of the messages they might have missed.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/villafanam/caps-event-driven-app/actions) 
- [GitHub PR](https://github.com/villafanam/caps-event-driven-app/pull/8)
- [back-end server url](https://caps-event-driven-app.onrender.com) 

### Setup

`npm install`

#### How to initialize/run your application (where applicable)

1. `node server/index.js`
2. `node clients/driver/index.js`
3. `node clients/flower-vendor/index.js`
4. `node clients/widget-vendor/index.js`

#### Features / Routes

- Our Server is going to have the same overall functionality, but we want to incorporate a few improvements to existing features:
  - We want a feature to keep a log of payloads that reach our system, organized by vendor and event type.
  - Payloads are “published” to the appropriate Clients for the appropriate events.
- Client Vendor Applications used by retailers, should subscribe to appropriate Vendor Queues so that they can be alerted when a delivery was made.
  - The Client can ask for all undelivered messages from a particular Server Queue.
  - When a Client receives a message, it will need to let the hub server know that it was received.

#### Tests

- vendor-handler test
  - logs and emits IN-TRANSIT payload

#### UML

[class 13 uml](https://projects.invisionapp.com/freehand/document/U6LsQUWO9)

![class 13 UML](/assets/lab13_uml.png)

