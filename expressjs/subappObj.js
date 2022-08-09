
const fn = ('/',(req,res)=>{
    res.send(`this is subObj \n${req.app.locals.aklima}`)
})

module.exports  = fn;