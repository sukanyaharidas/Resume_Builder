const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const path = require("path")
const resumecred  = require('./src/model/models/resumemodel')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = new express();
// const port = process.env.PORT

// dotenv.config();





const db ='mongodb+srv://Resume_Builder123:iEwOxF94MrLCFXeF@resumebuilder.rjnsjcb.mongodb.net/?retryWrites=true&w=majority'
// Databaseconnection
mongoose.connect(db, {
    useNewUrlParser: true,
})
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));


    app.use(cors());
app.use(bodyparser.json());
app.use(express.json({ urlencoded: true }));
app.use(express.json());


// requiring routes
app.post('/api/insert', function (req, res) {
    console.log(req.body);
    var resumeinputs = {
personal:req.body.personal,
educational:req.body.educational,
workexp:req.body.workexp,
skills:req.body.skills,
hobbies:req.body.hobbies

    }

    var inputs = new resumecred(resumeinputs);
    inputs.save()
    res.send()
})

// const resumerouter = require('./src/model/routes/resumeroute')

// app.use('/api',resumerouter)
app.get('/api/:id',(req,res)=>{
    console.log('data');
    const id =req.params._id;
    resumecred.findOne({"_id":id})
    .then((data)=>{
        console.log('data');
        res.send(data)
    })
})

app.get('/', (req, res) => {
    res.send('App is working Fine')
})

// port listening
app.listen(3000, function () {
    console.log('running on port 3000');
})