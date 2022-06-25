# CLASS 11 Read: Event Driven Applications

*All notes taken from reading material*

## Event-Driven Programming in Node.js

1. What native Node.js module allows us to get started with Event Driven Programming?

**EventEmitter**

> const EventEmitter = require('events').EventEmitter;
> const myEventEmitter = new EventEmitter;

*Via Node.js.org*
__________________________________
const { EventEmitter, once } = require('node:events');

const myEE = new EventEmitter();

async function foo() {
  await once(myEE, 'bar');
  console.log('bar');

  // This Promise will never resolve because the 'foo' event will
  // have already been emitted before the Promise is created.
  await once(myEE, 'foo');
  console.log('foo');
}

process.nextTick(() => {
  myEE.emit('bar');
  myEE.emit('foo');
});

foo().then(() => console.log('done'));
__________________________________

2. What is the value of Object Oriented Programming used in tandem with Event Driven Programming?

- These two make for a very valuable combination in a wide variety of situations

- The Object Oriented approach promotes the idea that all behavior of an individual unit (or object) be handled from code within that unit.

- By registering event listeners we can actually reverse the flow of communication between our objects. Rather than on object needing to reach inside another object to trigger a function, our objects can just emit events and whichever objects are listening to those event will process it in the way they have been told to. The source of an objects behavior is now entirely contained within itself, rather than needing to be accessed by external objects.

3. Consider your knowledge of Event Driven Programming in the Web Browser, now explain to a non-technical friend how Event Driven Programming might be useful on the backend using Node.js.

*Non-Event-Driven approach*
///////////////////////////////////////////////////////
class Food {
  constructor(name) {
    this.name = name;
  }

  becomeEaten() {
    return 'I have been eaten.';
  }
}

var bacon = new Food('bacon');

class gator {
  eat() {
    bacon.becomeEaten();
  }
}
///////////////////////////////////////////////////////
**VS**

*Event-Drivin approach*
///////////////////////////////////////////////////////

const EventEmitter = require('events').EventEmitter;
const myGatorEvents = new EventEmitter;

class Food {
  constructor(name) {
    this.name = name;
    // Become eaten when gator emits 'gatorEat'
    myGatorEvents.on('gatorEat', this.becomeEaten);
  }

  becomeEaten(){
    return 'I have been eaten.';
  }
}

var bacon = new Food('bacon');

const gator = {
  eat() {
    myGatorEvents.emit('gatorEat');
  }
}