import { Injectable } from '@angular/core';
import { educationaldetailsmodel } from 'src/models/educationaldetailsmodel';
import { workexperiencedetailsmodel } from 'src/models/workexperiencemodel';
import { personaldetailsmodel } from 'src/models/personaldetailsmodel';
import { hobbydetailesmodel } from 'src/models/hobbiesmodel';
import { skilldetailsmodel } from 'src/models/skillsmodel';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResumeserviceService {

  constructor(private http: HttpClient) { }
  data = [[{
    qualification: '',
    courseDetails: '',
    institution: '',
    startDate: '',
    course: '',
    endDate: '',
  }], [{

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
  [{
    jobProfile: '',
    startDate: '',
    companName: '',
    endDate: '',
    jobDescription: '',
  }],
  [{
    skill: '',

  }],
  [{
    hobby: '',

  }]
  ]

 
senddata(data:any){{
  console.log(data.values);
  return this.http.post('http://localhost:3000/insert', {data})
  .subscribe((data)=>console.log(data));
}

}
getdata(id:any){
  console.log(id,"id");
  return this.http.get('http://localhost:3000/api/:id')
  
}

}
