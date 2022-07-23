const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const path = require("path")
const   resumecred  = require('./src/model/models/resumemodel')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = new express();
const port = process.env.PORT

dotenv.config();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json({ urlencoded: true }));
app.use(express.json());





// Databaseconnection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

// requiring routes
app.post('/api/insert', function (req, res) {
    console.log('req.body');
    var resumeinputs = {
personal:[{
    qualification: req.body.qualification,
    courseDetails: req.body.courseDetails,
    institution: req.body.institution,
    startDate: req.body.startDate,
    course: req.body.course,
    endDate: req.body.endDate,
}],
educational:[{
    name: req.body.name,
    role: req.body.role,
    aboutMe: req.body.aboutMe,
    email: req.body.email,
    phone: req.body.phone,
    image: req.body.image,
    address: req.body.address,
    city: req.body.city,
    pin: req.body.pin
}],
workexp:[{
    jobProfile:req.body.jobProfile,
    startDate: req.body.startDate,
    companName: req.body.companName,
    endDate: req.body.endDate,
    jobDescription: req.body.jobDescription,
}],
skills:[{
    skill: req.body.skill,
}],
hobbies:[{
    hobby: req.body.hobby
}]

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
app.listen(port, function () {
    console.log('running on port 3000');
})