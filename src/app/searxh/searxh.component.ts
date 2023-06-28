import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searxh',
  templateUrl: './searxh.component.html',
  styleUrls: ['./searxh.component.css']
})
export class SearxhComponent {
  searchInput:string='';
  @Output() 
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  search() {
  //  console.log(this.searchInput);
    this.searchTextChanged.emit(this.searchInput);
  }
}
