//Path info
// const path = require('path')
// const pathparse = path.parse(__dirname)
// const fileInfo = path.parse(__filename)
// console.log(pathparse)// show us directory info as a jason format
// console.log(fileInfo)


//OS module
// const os = require('os')
// const total_mem = os.totalmem();
// const free_mem = os.freemem();
// console.log(total_mem);
// console.log(free_mem);
// console.log(`Total mem: ${total_mem}\nFree mem: ${free_mem}`);

//FIle module;
// const fs = require('fs');

// const file = fs.readdirSync('./');
// console.log(file)
// const fileAsy = fs.readdir('./', (err,files)=>{
//     if(err)
//         console.log( console.log("error"));
//     else{
//         console.log("resule: ",files);
//     }
// })

//Event Module
// const EventEmitter = require('events');//it's a class
// const { emit } = require('process');
// const emitter = new EventEmitter; //object

//register a listenener
// emitter.on('messageLogged',()=>{
//     console.log('Listener called');
// })

//with arguments
// emitter.on('messageLogged',(arg)=>{
//     console.log(arg);
// })

// //raise an event
// // emitter.emit('messageLogged');
// // using event argument
// emitter.emit('messageLogged',{id:1,name:'thasan'})

//emit means make a noise or produce somtthing
//in here emit is signalling that event is happened


// const EventEmitter = require('events')

// class Myevent extends EventEmitter{
//     myEvent(message){
//         this.emit('ahsan',{id:123,name:'Ahsan Sourav'});
//     }

// }


// module.exports = Myevent;


// http module

const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('This is Root directory');
        res.end(); 
    }
    else if(req.url === '/about'){
        res.write('This is About')
        res.end();
    }
    else{
        res.write('404 Not found')
        res.end();
    }
});

server.listen(3000);
console.log('listening on port 3000')


