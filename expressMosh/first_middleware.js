const first_middleware = (req,res,next)=>{
    console.log('Firt Middleware')
    next();
}

module.exports =  first_middleware;