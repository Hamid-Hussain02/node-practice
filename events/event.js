const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}


function registerEvent(req,res){
    const myEmitter = new MyEmitter();

    let m = 0;
myEmitter.on('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Prints: 2
res.send("emit sent")
}

module.exports={
    registerEvent
}