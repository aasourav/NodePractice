const EventEmitter = require('events')
const MyEvent = require('./index')
const me = new MyEvent();


me.on('ahsan',(arg)=>{
    console.log(arg);
})
me.myEvent('hi')