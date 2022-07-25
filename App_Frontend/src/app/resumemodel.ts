export class resumemodel{
    constructor(

       
     public personal:[{  
        qualification: String,
       courseDetails: String,
       institution: String,
       startDate: String,
       course: String,
       endDate: String,}],
     public  educational:[{
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
     public  workexp:[{
           jobProfile:String,
           startDate: String,
           companName: String,
           endDate: String,
           jobDescription: String,
       }],   
      public skills:  [{
           skill: String,
       
         }],
     public    hobbies:
         [{
           hobby: String,
       
         }] 
    ){}
}