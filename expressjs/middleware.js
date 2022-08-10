const express = require('express')
const cookieParser  = require('cookie-parser')

const app = express();

//Third Party middle ware
// app.use(cookieParser)

//Middleware
const mid1 = (req,res,next)=>{
    console.log('I am Middleware 1');
    // res.send('Middleware 1')
    next();
}

//Error handlig middleware
const mid2 = (req,res,next)=>{
    console.log('I am Middleware 2');
    // next();
    throw new Error()
}
//now we are going to catch the error
const Err = (err,req,res,next)=>{
    console.log(err.message)
    res.sendStatus(500)
}
//be Careful .... 
//middlewares follow the order

//application level middlware
app.use(mid1)
// app.use(mid2)
// app.use(Err)

//built in middleware
app.use(express.json())

//Router level middleware
admin = express.Router()

//Configurable Middleware
const wrap = (config)=>{
    return (req,res,next)=>{
        if(config.log){
            console.log(`It's ture`)
            res.set({'title':'Hello Sourav'})
            next()
        }
        else{
            throw new Error('This is error')
            //etar jonno ar error handle korlam
            // nah..
        }
    }
}
admin.use(wrap({log:true}))
admin.get('/',(req,res)=>{
    res.send(res.get('title'))
})
app.use('/admin',admin)

app.get('/',(req,res)=>{
    res.send('<h1>Hello Sourav!</h1>')
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server Listening on Port ${port}`)
})


