const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

let genres = [
    {id:1 , type:'Horror'},
    {id:2, type:'Drama'},
    {id:3, type:'Love'},
    {id:4 , type:'K-Drama'}
];

app.get('/api/genres',(req,res)=>{
    res.send(genres);
})

app.get('/api/genres/:id',(req,res)=>{
    
    const ID = req.params.id;
    const int_id = parseInt(ID);
    if(int_id<1 || int_id>genres.length){
        return res.status(404).send('File Not Found')
    }
    // ID++;
    
    res.send(genres[int_id-1]);
})

app.post('/api/genres',(req,res)=>{
    // const Name = req.body
    const schema = {
        type : Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body,schema)
    
    if(result.error){
        return res.status(400).send(result)
    }
    const new_data = {
        id : genres.length+1,
        type: req.body.type
    }
    genres.push(new_data);
    res.send(genres)
})

app.put('/api/genres/:id',(req,res)=>{
    const schema = {
        type : Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body,schema)
    
    if(result.error){
        return res.status(400).send(result)
    }

    genres[req.params.id-1].type = req.body.type;
    res.send(req.params.id);
    console.log(genres)
})

app.delete('/api/genres/:id',(req,res)=>{
    // req.send(req.par)
    const course = genres.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("Course Not found")
        return;
    }
    //not exist return 404 

    // delete the course
    const index = genres.indexOf(course);
    genres.splice(index,1);
    res.send('Deleted\n')
})

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`Server start's on ${port}`);
})
