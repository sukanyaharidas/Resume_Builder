const mongoose = require ("mongoose");

const resumedetails = new mongoose.Schema({

    personal:[{  
         qualification: String,
        courseDetails: String,
        institution: String,
        startDate: String,
        course: String,
        endDate: String,}],
        educational:[{
            name: String,
            role: String,
            aboutMe: String,
            email: String,
            phone: String,
            image: String,
            address: String,
            city: String,
            pin: String
        }],
        workexp:[{
            jobProfile:String,
            startDate: String,
            companName: String,
            endDate: String,
            jobDescription: String,
        }],   
        skills:  [{
            skill: String,
        
          }],
          hobbies:
          [{
            hobby: String,
        
          }]
}

)


const resumecred = mongoose.model('resumecred', resumedetails)



module.exports = resumecred