const supportReq = (req,res)=>{
    res.send(req.app.locals.name)
}

module.exports = supportReq