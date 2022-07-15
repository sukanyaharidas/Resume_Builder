import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  constructor(private activeModal: NgbActiveModal) {}
  ngOnInit() {
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
    
  }
}
