import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.css']
})
export class AccountsettingsComponent implements OnInit {
  public inactive1:boolean = true;
  public inactive2:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  changename(){
    this.inactive1 = !(this.inactive1);
    
  }

  changemail(){
    this.inactive2= !(this.inactive2)
  }


}
