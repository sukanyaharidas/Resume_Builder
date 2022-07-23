import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, ReactiveFormsModule,FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder, private activeModal: NgbActiveModal){}
  RegisterForm =  {
      firstName : '',
      email : '',
      password : '',
      cnfPassword : ''
};

registerVerify()
{
alert("Welcome to the Resume World")
}
  
 // constructor(private activeModal: NgbActiveModal) {}
  ngOnInit() {
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
    
  }
}
