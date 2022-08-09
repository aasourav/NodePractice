/*
    uptime monitoring
*/

//dependencies
const http = require('http');
const { parse } = require('path');
const url = require('url')
const {StringDecoder} = require('string_decoder')

//app object - module scaffolding
const app = {};

//configuration
app.config = {
    port:3000
};

// create server

app.createServer = ()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`listening to port number ${app.config.port}`)
    })
}

//handle req  res
app.handleReqRes = (req,res)=>{
    //request handling
    
    // get the url and parse it
    const parseUrl  = url.parse(req.url,true)
    const path = parseUrl.pathname
    const triMMedpath = path.replace(/^\/+|\/+$/g,'')
    const method = req.method.toLower;
    const querySTring = parseUrl.query;
    const headerObject = req.header;
    
    const decoder = new StringDecoder('utf-8')
    let realDta = ''
    req.on('data',(buffer)=>{
        realDta += decoder.write(buffer)
    })
    req.on('end',()=>{
        realDta +=decoder.end();
        console.log(realDta)
    })


    // console.log(querySTring) //when we pass the val
    //response handle
    res.end('Hello Jooss');
}

//start the server
app.createServer();