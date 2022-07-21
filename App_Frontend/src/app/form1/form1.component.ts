import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  isLinear=true;
  public personalDetailsForm: FormGroup |any;
  public educationDetailsForm: FormGroup |any;
  public workExperienceDetailsForm: FormGroup |any;
  public skillsForm:FormGroup|any;
  public hobbiesForm: FormGroup|any;
// public userdetails: FormGroup|any;


get personalDetailsArray(): FormArray{
  return this.personalDetailsForm?.get('personalDetails') as FormArray;
}
 get educationDetailsArray():FormArray{
  return this.educationDetailsForm?.get('educationDetails') as FormArray;
 }

 get workExperienceArray(): FormArray{
  return this.workExperienceDetailsForm?.get('workExperience') as FormArray;
 }

 get skillDetailsArray():FormArray{
  return this.skillsForm?.get('skillDetails') as FormArray;
 }


 get hobbyDetailsArray(): FormArray{
  return this.hobbiesForm?.get('hobbyDetails') as FormArray;
 }


  constructor(){}
    
ngOnInit(): void {
  this.generatePersonalDetailsForm();
  this.generateEducationDetailsForm();
  this.generateWorkExperienceForm();
  this.generateSkillDetailsForm();
  this.generateHobbyDetailsForm();
}


// personal details functions 
 public generatePersonalDetailsForm():void{
    this.personalDetailsForm= new FormGroup({
      personalDetails:new FormArray([
        PersonalDetailsComponent.addPersonalDetails(),
       
      ])
    });
 }

 public addPersonalDetailsItem():void{
  this.personalDetailsArray?.push( PersonalDetailsComponent.addPersonalDetails());
 }

 public deletepersonalDetails(index:number):void{
 this.personalDetailsArray?.removeAt(index);
 }  


//  education details functions
public generateEducationDetailsForm():void{
  this.educationDetailsForm=new FormGroup({
    educationDetails:new FormArray([
      EducationDetailsComponent.addEducationDetails(),
      
    ])
  })
}

public addEducationDetailsItem():void{
  this.educationDetailsArray?.push(EducationDetailsComponent.addEducationDetails());
}

public deleteEducationDetails(index:number){
  this.educationDetailsArray?.removeAt(index);
}

// work experience functions

public generateWorkExperienceForm():void{
  this.workExperienceDetailsForm= new FormGroup({
    workExperience: new FormArray([
      WorkexperienceComponent.addWorkExperience()
    ])
  })
}

public addWorkExperienceItem():void{
  this.workExperienceArray?.push(WorkexperienceComponent.addWorkExperience());
}

public deleteworkExperience(index:number):void{
  this.workExperienceArray?.removeAt(index);
}

public generateSkillDetailsForm():void{
  this.skillsForm= new FormGroup({
    skillDetails: new FormArray([
      SkillsComponent.addSkillDetails()
    ])
  })
}

public addSkillDetailsItem():void{
  this.skillDetailsArray?.push(SkillsComponent.addSkillDetails());
}

public deleteskillDetails(index:number):void{
  this.skillDetailsArray?.removeAt(index);
}


public generateHobbyDetailsForm():void{
  this.hobbiesForm= new FormGroup({
    hobbyDetails: new FormArray([
      HobbiesComponent.addHobbyDetails()
    ])
  })
}

public addHobbyDetailsItem():void{
  this.hobbyDetailsArray?.push(HobbiesComponent.addHobbyDetails());
}
 public deletehobbyDetails(index:number):void{
  this.hobbyDetailsArray?.removeAt(index);
 }

 public displaydata():void{
  
  console.log("hello");
  console.log(this.personalDetailsForm.value);
  console.log(this.educationDetailsForm.value);
  console.log(this.workExperienceDetailsForm.value);
  console.log(this.skillsForm.value);
  console.log(this.hobbiesForm.value);
 }


}
  
  
  

