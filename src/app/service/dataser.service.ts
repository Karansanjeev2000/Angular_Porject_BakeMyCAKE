import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bake } from '../models/Bake';
import { Router } from '@angular/router';
import { CustomerD } from '../models/Custmformat';



@Injectable({
  providedIn: 'root'
})
export class DataserService {
  

  private urlcakes="http://localhost:3001/alldata";
  private urlorder="http://localhost:3000/ordersdis/";

  constructor(private http:HttpClient,private router:Router) { }

  getcakes():Observable<any>{
    return this.http.get(this.urlcakes);
  }

  
 

//AUTHENTICATION SERVICE 
isLoggedIn:boolean=false;

  login(key: string) {
   if(key === "admin"){
    this.isLoggedIn=true;
   }
}
  logout(){
      this.isLoggedIn=false;
    }
  

//REROUTE AFTER AUTHENTICATION
navigateToserverdata(){
  this.router.navigate(["serverdata"]);
}

navigateToHomeView() {
  this.router.navigate(["cakes"]);
}

navigateToLoginView() {
  this.router.navigate(["login"]);
}

navigateToCart(){
  this.router.navigate(["addtocart"]);
}



///get required data service  and display all data 
private geturl="http://localhost:3001/alldata";
id:string|undefined;

getneededdata(id?:string):Observable<any>{
  return this.http.get(`${this.geturl}/${id}`);
}
setid(idd:any){
  this.id=idd;
}
getid(){
  return this.id;
}




///posted data to new json file and fetching for admin view 
urlpost:string="http://localhost:3002/ordersdis";

saveData(data? : CustomerD):Observable<CustomerD> {
  return this.http.post<CustomerD>(`${this.urlpost}`, data)
}

getserverdata():Observable<any>{
  return this.http.get(this.urlpost);
}

}
