const express = require('express')

const app = express();
const admin = express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    // console.log(res.headersSent)
    // res.render('index_local_var.ejs',{
    //     name : 'MD Ahsan Amin',
    //     id: 181400095,
    //     dept: 'CSE'
    // })
    // console.log(res.headersSent)
    // res.json({
    //     name: "Ahsan Amin",
    //     id: 181400095,
    //     dept: 'Computer Science'
    // })

    // res.sendStatus(408) //res.end() not required
    // res.format({
    //     'text/html': ()=>{
    //         res.render('index.ejs')
    //     },
    //     'application/json': ()=>{
    //         res.send('I am Json')
    //     },
    //     default: ()=>{
    //         res.send('I am Default')
    //     }
    // })
    //OR
    // res.format({
    //     html: ()=>{
    //         res.render('index.ejs')
    //     },
    //     json: ()=>{
    //         res.send('I am Json')
    //     },
    //     default: ()=>{
    //         res.send('I am Default')
    //     }
    // })

    // res.cookie('ID','181400095').end()

    // res.redirect('/admin')

    // res.set(
    //     'content-type' , 'application/json'
    // )
    // // OR
    // res.set({
    //     'content-type' : 'text/plain',
    //     'content-lenght': '123'
    // })
    //set na korle show kore na.
    // console.log(res.get('content-type'))
    // res.end()

    console.log(res.location('/test'))
    res.end();

})
app.get('/admin',(req,res)=>{
    res.send('Hello I am in Admin now')
})

app.listen(3000,()=>{
    console.log('Listening on Port 3000')
})