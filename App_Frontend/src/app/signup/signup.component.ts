import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, ReactiveFormsModule,FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  form:FormGroup|any;
  constructor(private fb:FormBuilder, private activeModal: NgbActiveModal){}

registerVerify()
{
alert("Welcome to the Resume World")
}
  
 // constructor(private activeModal: NgbActiveModal) {}
  ngOnInit() {

    this.form=new FormGroup({
      fname:new FormControl('', Validators.required),
      emailid:new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password:new FormControl('',Validators.required),
      // cpassword: new FormControl('',Validators.required)
    },
      // {
      //   validators:this.MustMatch('password', 'cpassword')
      // } 
      )
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
    
  }
}
