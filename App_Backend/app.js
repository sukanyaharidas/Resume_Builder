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
const port = 4000;

dotenv.config();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json({ urlencoded: true }));
app.use(express.json());



function verifyToken(req,res,next){
  if(!req.headers.authorization){
    return res.status(401).send('unauthorizedrequest')
  }
  let token=req.headers.authorization.split('')[1]
  if(token=='null'){
    return res.status(401).send('unauthorizedrequest')

  }
  let payload=jwt.verify(token, 'secretKey')
  console.log(payload);
  if(!payload)
{
  return res.status(401).send('unauthorizedrequest')
  req.userId=payload.subject;
  next()

}
}

// Databaseconnection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

// requiring routes
app.post('/insert',verifyToken, function (req,verifyToken, res) {
    console.log(req.body.data.hobbies);
    var resumeinputs = {
personal:[{
    qualification: req.body.data.qualification,
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
    console.log(resumeinputs);
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


// app.post('/signup',function(req,res){
//     console.log(req.body);
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
//     console.log(req.body);
//         var data={
//                     fname:req.body.users.fname,
//                     emailid:req.body.users.emailid,
//                     password:req.body.users.password
//                 };
//     var _auth=new signup(data);
//  _auth.save();
    
  
// });


app.post('/signup',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    console.log(req.body.users);
    signup
    .findOne({emailid: req.body.users.emailid},(err,user)=>{
      if(user){
        res.status(401).send('User Exists');
      }
      else{
        var data={
                    fname:req.body.users.fname,
                    emailid:req.body.users.emailid,
                    password:req.body.users.password
                };
                var _auth=new signup(data);
             _auth.save();
        res.status(200).send();
      }
    }) 
    


//     if(mail.value!=signup.emailid){
//       var data={
//         fname:req.body.users.fname,
//         emailid:req.body.users.emailid,
//         password:req.body.users.password
//     };
//     var _auth=new signup(data);
//  _auth.save();
//     }
//     else{
//       res.send('User already exist');
//     }
  
});



 
app.post('/login', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
    console.log("data is",req.body);
 
    signup
    .findOne({ emailid: req.body.authData.username, password: req.body.authData.password },(err,user)=>{
      if(!user){
        console.log("error is",err);
        res.status(401).send();
      }
      else{
        let payload = { subject: user.email + user.password };
            let token = jwt.sign(payload, "secretKey");
            res.status(200).send({ token });
        console.log(user)
      }
    })

  })
  //   .clone()
  //   .then((user) => {
  //     if(user !== null){
  //     let payload = { subject: user.email + user.password };
  //     let token = jwt.sign(payload, "secretKey");
  //     res.status(200).send({ token });
  //     }
  //     else{
  //       res.status(401).send('Wrong Credentials')
  //     }
  //   });
  
  // });


// admin login
app.post('/login_admin', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  console.log("data is",req.body);

  if(process.env.ADMIN_USERNAME===req.body.data.username && 
    process.env.ADMIN_PASSWORD===req.body.data.password){

      let payload={subject:process.env.ADMIN_USERNAME+process.env.ADMIN_PASSWORD}
      let token=jwt.sign(payload,'secretKey')
      res.status(200).send({token});
      console.log("success");
     

    }
    else{
     
      console.log("failed");

      res.status(401).send("failed");
    }
  })



app.get('/', (req, res) => {
    res.send('App is working Fine')
})

// port listening
app.listen(port, function () {
    console.log('running on port 4000');
})
