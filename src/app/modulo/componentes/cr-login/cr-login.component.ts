import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cr-login',
  templateUrl: './cr-login.component.html',
  styleUrls: ['./cr-login.component.css']
})
export class CrLoginComponent {

  constructor(private router:Router){}
   
  ingreso(){
    this.router.navigate(['/dashcli/']);
  }

}
