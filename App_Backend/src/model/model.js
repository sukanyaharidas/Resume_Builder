const mongoose = require ("mongoose");

const resumedetails = new mongoose.Schema({
Name :String,
email : String,
phonenumber: String,
address : String,
Link1 :String,
tenthedu: String,
twelthedu: String,
collegeedu: String,
certificate1: String,
certificate2: String,
hobbies: String,
skill1 : String,
skill2: String,

})

const userdetails = new mongoose.Schema({
    username: String,
    email:String,
    password:String
})
const resumecred = mongoose.model('resumecred', resumedetails)
const usercred = mongoose.model('usercred', userdetails)


module.exports ={
    resumecred,usercred
}