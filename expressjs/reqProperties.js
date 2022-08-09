const express = require('express')
const cookieParser = require('cookie-parser');
const supportReq = require('./reqPropertiesSupports');
const app = express();
const admin = express();

app.use('/admin',admin);
app.use(cookieParser())
app.locals.name = "MD Ahsan Amin"
app.use('/',supportReq)
admin.get('/id/:id',(req,res)=>{
    console.log(req.route)
    console.log(req.get('content-type'))
    res.send(`
    Base Url: ${req.baseUrl}
    Original Url: ${req.originalUrl}
    Path: ${req.path}
    Hostname: ${req.hostname}
    IP: ${req.ip}
    Methond: ${req.method}
    Protocol: ${req.protocol}
    Parameter: ${req.params.id}
    Query: ${req.query.name}
    Body: ${req.body}
    Secure: ${req.secure}
    Cookies: ${req.cookies}
    Route: ${req.route}
    `)
})
app.get('/',(req,res)=>{
    res.send('<h1>Hello this is get</h1>')
})

app.listen(3000,()=>{
    console.log(`Listening on port 3000`)
})