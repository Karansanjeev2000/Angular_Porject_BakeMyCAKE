import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CakeComponent } from './cake/cake.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


import { HttpClientModule } from '@angular/common/http';
import { SearxhComponent } from './searxh/searxh.component';
import { FormsModule } from '@angular/forms';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { ServerdataComponent } from './serverdata/serverdata.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { CanDeactivateGuard } from './service/can-deactiavte.guard';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    CakeComponent,

    SearxhComponent,
    AddtocartComponent,
    LoginComponent,
    ServerdataComponent,
    
  ],
  imports: [
    MatButtonToggleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatRippleModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatGridListModule,
    MatDividerModule,
    MatTableModule,
    MatSelectModule
      
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
