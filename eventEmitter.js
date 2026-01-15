const eventEmitter = require('events')

const event = new eventEmitter()
event.on('start',()=>{
    console.log('started');
    
})

event.emit('start')
