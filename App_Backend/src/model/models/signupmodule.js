const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const authSchema=new Schema({
    fname: String,
    password: String,
    emailid: String
});

var authData=mongoose.model('AuthData', authSchema);
module.exports=authData;