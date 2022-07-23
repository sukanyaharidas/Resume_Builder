const mongoose = require ("mongoose");

    const userdetails = new mongoose.Schema({
        username: String,
        email:String,
        password:String
    })

    const usercred = mongoose.model('usercred', userdetails)

    module.exports ={
        usercred
    }