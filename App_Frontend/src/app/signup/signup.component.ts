import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signupUser = {fname : '',
  emailid: '',
 password:''
};

 showMsg: Boolean=false;
  form:FormGroup|any;
  constructor(private fb:FormBuilder,public auth:AuthServiceService,
    public router:Router){}

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
  // closeModal() {
  //   this.activeModal.close('Modal Closed');
    
  // }

  signUp(){
    this.auth.userSignup(this.signupUser);
    // .subscribe(
    //   res=>console.log(res),
    //   err=>console.log(err)
    // )
    this.showMsg= true;
    console.log(this.signupUser);
    // this.router.navigate(['/login']);
  }

}
