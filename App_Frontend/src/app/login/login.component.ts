import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User = {username : '',
          password : ''
  };

  userVerify()
  {
    alert("Welcome to the Resume World")
  }

  constructor(private activeModal: NgbActiveModal) {}
  ngOnInit() {
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
    
  }
}
