const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const path = require("path")
const { usercred, resumecred } = require('./src/model/model')

const mongoose = require("mongoose")
// dzqvhud8TXBOk2CS
const db = "mongodb+srv://Resume_Builder123:dzqvhud8TXBOk2CS@resumebuilder.rjnsjcb.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db, {
    useNewUrlParser: true,
})
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));
const app = new express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json({ urlencoded: true }));


// adding signup details
app.post("/signup", function (req, res) {

    console.log(req.body);
    var user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    var newuser = new usercred(user);
    console.log(newuser);
    newuser.save();
    res.send();
})

// app.post('/login', function (req, res) {
//     console.log(req.body);
//     var username = req.body.username
//     var email = req.body.email
//     var password = req.body.password

//     console.log(username);
//     usercred.findOne({ usernam, email })
//         .then(users => {
//             console.log(users);
//             if (users.username || users.email == email) {
//                 if (users.password == password) {
//                     return res.json('success')
//                 }
//             } else {
//                 res.status(401).send('Enter valid email and password')

//             }

//         })

// })
app.post('/input', function (req, res) {
    console.log(req.body._id);
    var resumeinputs = {
        Name: req.body.data.Name,
        email: req.body.data.email,
        phonenumber: req.body.data.phonenumber,
        address: req.body.data.address,
        Link1: req.body.data.Link1,
        tenthedu: req.body.data.tenthedu,
        twelthedu: req.body.body.data.twelthedu,
        collegeedu: req.body.data.collegeedu,
        certificate1: req.body.data.certificate1,
        certificate2: req.body.data.certificate2,
        hobbies: req.body.data.hobbies,
        skill1: req.body.data.skill1,
        skill2: req.body.data.skill2,
    }

    var inputs = new resumecred(resumeinputs);
    inputs.save()
})


app.put('/update', (req, res) => {
    console.log(re.body);
    id = req.body._id
    Name = req.body.Name,
        email = req.body.email,
        phonenumber = req.body.phonenumber,
        address = req.body.address,
        Link1 = req.body.Link1,
        tenthedu = req.body.tenthedu,
        twelthedu = req.body.twelthedu,
        collegeedu = req.body.collegeedu,
        certificate1 = req.body.certificate1,
        certificate2 = req.body.certificate2,
        hobbies = req.body.hobbies,
        skill1 = req.body.skill1,
        skill2 = req.body.skill2
    resumecred.findByIdAndUpdate({ "_id": id },
        {
            $set: {
                "Name": Name,
                "email": email,
                "phonenumber": phonenumber,
                "address": address,
                "Link1": Link1,
                "tenthedu": tenthedu,
                "twelthedu": twelthedu,
                "collegeedu": collegeedu,
                "certificate1": certificate1,
                "certificate2": certificate2,
                "hobbies": hobbies,
                "skill1": skill1,
                "skill2": skill2
            }
        })
        .then(function () {
            res.send();
        })
})

app.delete('/remove', (req, res) => {
    id = req.params.id;
    resumecred.findByIdAndRemove({ "_id": id })
        .then(() => {
            console.log('success')
            res.send();
        })
})


app.listen(3000, function () {
    console.log('running on port 3000');
})