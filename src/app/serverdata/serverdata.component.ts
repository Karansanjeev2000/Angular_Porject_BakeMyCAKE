import { Component, OnInit } from '@angular/core';
import { CustomerD } from '../models/Custmformat';
import { DataserService } from '../service/dataser.service';

@Component({
  selector: 'app-serverdata',
  templateUrl: './serverdata.component.html',
  styleUrls: ['./serverdata.component.css']
})
export class ServerdataComponent implements OnInit {
  displayedColumns:string[]=['id','cakeName','Quantity','cakeid','dateOfOrder','customerEmail','customerPhone','customerName','address'];
  dataarray:CustomerD[]=[];

  constructor(private ser:DataserService){}

  ngOnInit(): void {
   this.inddatahere();
   console.log(this.dataarray);
  }


  inddatahere(){
       this.ser.getserverdata().subscribe({
      next:data=>{
        this.dataarray=data;
      },
      error: err => {
       alert("No Orders Exists");
      }
    });
  }
}
