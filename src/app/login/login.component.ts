import { Component, OnInit } from '@angular/core';
import { DataserService } from '../service/dataser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  ngOnInit(): void {
   
  }

constructor(private ser:DataserService){}

  orderreqcode:string="";

  validatethekey(){
    this.ser.login(this.orderreqcode)
    if(this.ser.isLoggedIn===true){
      this.ser.navigateToserverdata();
    }
    else{
      alert("PLEASE enter valid Admin key");
    }
  }

}
