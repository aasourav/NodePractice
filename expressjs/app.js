const express = require('express')
const morgan = require('morgan')
const app = express()

// app.use(morgan('dev'))
//custom middleware

function customMiddleware(req,res,next){
    if(req.url === '/'){
        res.send('<h1> Page is blocket </h1>');
    }
}

app.use(customMiddleware)

app.get('/about',morgan('dev'), (req,res)=>{
    res.send('<h1> I am about </h1>')
})
app.get('/',(req, res)=>{
    res.send('<h1> i am sourav </h1>')
})
app.get('*',(req,res)=>{
    res.send('<h1> Not Found </h1>')
})
const port = process.env.PORT || 8989
app.listen(port,()=>{
    console.log(`server is running on Port ${port}`)
}) 