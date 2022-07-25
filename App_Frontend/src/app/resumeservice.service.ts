import { Injectable } from '@angular/core';

import {resumemodel} from './resumemodel'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResumeserviceService {

  constructor(private http: HttpClient) { }
  data = {
  personal:[{  
       qualification: '',
      courseDetails: '',
      institution: '',
      startDate: '',
      course: '',
      endDate: '',}],
      educational:[{
          name: '',
          role: '',
          aboutMe: '',
          email: '',
          phone: '',
          image: '',
          address: '',
          city: '',
          pin: ''
      }],
      workexp:[{
          jobProfile:'',
          startDate: '',
          companName: '',
          endDate: '',
          jobDescription: '',
      }],   
      skills:  [{
          skill: '',
      
        }],
        hobbies:
        [{
          hobby: '',
      
        }]
}

 
senddata(Data:resumemodel){{
  console.log(Data);
  return this.http.post('http://localhost:3000/api/insert',{Data})
.subscribe(()=>{console.log(Data)})


}

}
getdata(id:any){
  console.log(id,"id");
  return this.http.get('http://localhost:3000/api/:id')
  
}

}
