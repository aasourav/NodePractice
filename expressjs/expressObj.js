const { text } = require('express');
const express = require('express')
const app = express();
const admin = express();

// app.use(express.json())
// app.use(express.text())
// app.use(express.urlencoded())
// app.use(express.static(`${__dirname}/Static/`,{
//     index: 'text.html'
// }))
// const router = express.Router({
//     caseSensitive : true
// })
// app.use(router)
// router.get('/admin',(req,res)=>{
//     res.send('this is router')
// })

app.get('/',(req,res)=>{
    // res.send('<h1>Hello This is Ahsan Sourav</h1>')
    res.render('index.ejs')
})
app.post('/form',(req,res)=>{
    // res.send(typeof(parseInt(req.body.id)))
    res.send(req.body)
})


app.listen('3000',()=>{
    console.log(`listening on port 3000`)
})