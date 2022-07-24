import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User = {username : '',
          password : ''
  };

  form:FormGroup|any;
  activeModal: any;
  modalService: any;
  exampleModal: any;

  

  constructor(private _auth:AuthServiceService,private _router:Router, ) {}
  ngOnInit() {
    this.form=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      // cpassword: new FormControl('',Validators.required)
    },
      // {
      //   validators:this.MustMatch('password', 'cpassword')
      // } 
      )
  }
 
closeModal() {
   
    
  }
  loginUser(){
  
    this._auth.login(this.User).subscribe((data)=>{
      

      if(data){
        this._router.navigate(['\home_user']);
       

      }
      // localStorage.setItem('token',data.token)
    
     
        // 
        
      
  
      })
    }
}
