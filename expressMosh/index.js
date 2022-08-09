const express = require('express');
const Joi = require('joi');
const first_middleware = require('./first_middleware');


const app = express();
app.use(express.json());
app.use(first_middleware);
app.use((req,res,next)=>{
    console.log('Second Middleware')
    next()
})

//built in middleware

const courses = [
    {id:1,name:'course 1'},
    {id:2,name:'course 2'},
    {id:3,name:'course 3'},
    {id:4,name:'course 4'}

]
app.get('/',(req, res)=>{  //route handler callback fn
    res.send('Hello Wrold') 
});

app.get('/api/courses',(req,res)=>{
    res.send(courses);
})
//single course id
// :id is a parameter.
//we can set multiple parameter
// app.get('/api/courses/:id',(req,res)=>{
//     res.send(req.params.id);
// })

app.get('/api/courses/:id/:name',(req,res)=>{
    res.send(req.params);
})

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(course){
        res.send(course);
    }
    else{
        res.status(404).send("Course NOt found")
    }
})

app.post('/api/courses',(req,res)=>{
    const schema = {
        name: Joi.string().min(7).required()
    }

    const result = Joi.validate(req.body,schema);
    console.log(result)
    if(result.error){
        res.status(400).send(result.error.details[0].message)
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course)
})

app.put('/api/courses/:id',(req,res)=>{
    //Look up the course
    //if not exist return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("Course NOt found")
        return;
    }
    //valided

    //if invalid  return 400
    // const result = validateCourse(req.body)
    const {error} = validateCourse(req.body);
    console.log(error)
    if(error){
        res.status(400).send(result.error.details[0].message)
        return;
    }

    //else update the course
    course.name = req.body.name;
    res.send(course);
})
app.delete('/api/courses/:id',(req,res)=>{
    // Lookup the course 
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("Course Not found")
        return;
    }
    //not exist return 404 

    // delete the course
    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);
})
function validateCourse(course){
    const schema = {
        name: Joi.string().min(7).required(),
    }

    const result = Joi.validate(course,schema);
    return result;
}

//set hot dynamically
const port = process.env.PORT || 3000
//set environment port value
// goto terminal and type export PORT=your port num
app.listen(port,()=>{
    console.log(`Process runnig on ${port}`);
})
// app.post();
// app.put();
// app.delete();


