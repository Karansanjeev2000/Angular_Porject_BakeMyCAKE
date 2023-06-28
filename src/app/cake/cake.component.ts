import { Component, OnInit } from '@angular/core';
import { DataserService } from '../service/dataser.service';
import { Bake } from '../models/Bake';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit{
  
  notes:Bake[]=[];
  filteredNotes:Bake[] = [];
  constructor(private ser:DataserService, private http:HttpClient){}


// subscibe to service and get data and put in empty notes array declared above to create a array of data.
  getNotes() {
    this.ser.getcakes().subscribe(
      (data) => {
        this.notes = data;
        this.filteredNotes=data;
      }
    );
    console.log(this.notes);
  }
  ngOnInit(): void {
    this.getNotes();
   }


//filter based on search text ,captures event emitted from search component 
   onSearchTextChanged(searchText: string){
    if (searchText.trim()!==''){
      console.log(searchText);
      this.filteredNotes = this.notes.filter((note:any) =>note.Name.toLowerCase().includes(searchText.toLowerCase()));
    } else {
      this.filteredNotes = this.notes;
    }
  }

//card filteration based on cakes/chocolates or so...
  searchInput:string='';
  onfilter(){
    console.log(this.searchInput);
this.filteredNotes=this.notes.filter((note:any) =>note.category.toLowerCase().includes(this.searchInput.toLowerCase()));
  }


  // add to cart() to send file data to json server 
  addtocart(id:string|undefined){
    console.log(id);
    this.ser.navigateToCart();
    this.ser.setid(id);
  }


}
