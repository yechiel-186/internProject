import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardingPageComponent } from './components/boarding-page/boarding-page.component';
import { RegisterInternComponent } from './components/register-intern/register-intern.component';
import { LoginComponent } from './components/login/login.component';
import { CodeComponent } from './components/code/code.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { OpenCamaraComponent } from './components/open-camara/open-camara.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ImageComponent } from './components/image/image.component';
import { PassComponent } from './components/pass/pass.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Quesitnners1Component } from './components/quesitnners1/quesitnners1.component';




@NgModule({
  declarations: [
    AppComponent,
    BoardingPageComponent,
    RegisterInternComponent,
    LoginComponent,
    CodeComponent,
    HeaderComponent,
    OpenCamaraComponent,
    CreateUserComponent,
    ImageComponent,
    PassComponent,
    Quesitnners1Component
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
