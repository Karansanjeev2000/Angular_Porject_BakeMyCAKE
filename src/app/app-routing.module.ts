import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeComponent } from './cake/cake.component';
import { AppComponent } from './app.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { LoginComponent } from './login/login.component';
import { ServerdataComponent } from './serverdata/serverdata.component';
import { AuthGuard } from './service/auth.guard';
import { CanDeactivateGuard} from './service/can-deactiavte.guard';


const routes: Routes=[
  {path:"login",component:LoginComponent},
  {path:"cakes",component:CakeComponent},
  {path:"addtocart",component:AddtocartComponent,canDeactivate:[CanDeactivateGuard]},
  {path:"serverdata",component:ServerdataComponent,canActivate:[AuthGuard]},
 {path:'', redirectTo:"cakes",pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
