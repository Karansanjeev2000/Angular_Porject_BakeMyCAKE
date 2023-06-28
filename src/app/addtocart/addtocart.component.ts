import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataserService } from '../service/dataser.service';
import { Bake } from '../models/Bake';
import { HttpClient } from '@angular/common/http';
import { CustomerD } from '../models/Custmformat';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  post:any;
  data?:Bake;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar,private ser:DataserService,private http:HttpClient){}

  ngOnInit(): void{this.binddatahere();}

//DATA FRTOM CAKE COMPONENT IS DISPLAYED HERE USING THIS 
DATA:Bake[]=[];
id:string|undefined;
url:any;

binddatahere(){
  this.id=this.ser.getid();
  this.ser.getneededdata(this.id).subscribe({
    next: data => {
      this.DATA.push(data);
    },
    error: err => {
     alert("CANT ADD INTO AN EMPTY CART");
    }
  });
}

///deactivated guard
submitStatus:boolean=false;
canDeactivate() {
  if (!this.submitStatus)
      this.submitStatus = confirm("You have not submitted a request to this Order. Any details entered will be lost. Are you sure you want to leave?");
  return this.submitStatus;
}


// POSTING DATA TO JSON SERVER 

formdata:CustomerD={};
makeRequest() {
    if (this.formdata.customerName && this.formdata.customerEmail && this.formdata.customerPhone && this.formdata.dateOfOrder &&this.formdata.address && this.formdata.QTY ) {
        this.formdata.cakeName=this.DATA[0].Name;
        this.formdata.cakeid=this.DATA[0].id;
        this.ser.saveData(this.formdata).subscribe({
        next: data => {
            this.snackBar.open("Order Request Submitted-ReOrder for more...","", {
            duration:3000
            });
            this.submitStatus=true;
                            
            this.ser.navigateToHomeView();
        },
        error:err => {
            
            alert("Error in adding order pls try later");
        }
        });
    }
    }








}
