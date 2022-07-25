const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const path = require("path")
const resumecred  = require('./src/model/models/resumemodel')
const signup= require('./src/model/models/signupmodule')
const jwt = require("jsonwebtoken");


const mongoose = require("mongoose")
const dotenv = require("dotenv");
const { sign } = require("crypto");
const app = new express();
const port = 3000;

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
app.post('/insert', function (req, res) {
    console.log(req.body);
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
    hobby: req.body.data.hobby
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


app.post('/signup',function(req,res){
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    console.log(req.body);
        var data={
                    fname:req.body.users.fname,
                    emailid:req.body.users.emailid,
                    password:req.body.users.password
                };
    var _auth=new signup(data);
 _auth.save();
    
  
});



 
app.post('/login', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
    console.log("data is",req.body);
    signup
    .findOne({ emailid: req.body.authData.username, password: req.body.authData.password },(err,user)=>{
      if(err){
        console.log("error is",err)
      }
      else{
        console.log(user)
      }
    })
    .clone()
    .then((user) => {
      if(user !== null){
      let payload = { subject: user.email + user.password };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
      }
      else{
        res.status(401).send('Wrong Credentials')
      }
    });
  
  });

app.get('/', (req, res) => {
    res.send('App is working Fine')
})

// port listening
app.listen(port, function () {
    console.log('running on port 3000');
})
