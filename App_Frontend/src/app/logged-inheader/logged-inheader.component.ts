import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-inheader',
  templateUrl: './logged-inheader.component.html',
  styleUrls: ['./logged-inheader.component.css']
})
export class LoggedINheaderComponent implements OnInit {
  panelOpenState = false;
 showme :boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleTag(){
    this.showme=!this.showme
  }

}
