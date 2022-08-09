const express = require('express');
const fn = require('./subappObj');


const app = express();
const admin = express();
const mod = express();

app.use('/admin',admin);
admin.use('/mod',mod);

app.enable('case sensitive routing')
// app.disable('case sensitive routing')

admin.get('/id',(req,res)=>{
    res.send(admin.mountpath)
})
// app.all('/',(req,res)=>{
//     res.send('this is common area')
// })
// mod.get('/id',(req,res)=>{
//     // res.send(mod.mountpath); //only show the root
//     // res.send(mod.path()) //show full tree
    
// })

app.locals.sou = `Ahsan Sourav!`
app.locals.aklima = `Aklima Khatun`
app.set('name','Ahsan Sourav')
app.set('id','181400095')

// app.get('/',fn)



app.get('/sou',(req,res)=>{
    // res.send(`Hello ${app.locals.aklima}`)
    res.send(`Name: ${app.get('name')}
    ID: ${app.get('id')}
    `)
})

app.set('view engine', 'ejs')



app.listen('3000',()=>{
    console.log('Listening on port 3000')
})