import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardingPageComponent } from './components/boarding-page/boarding-page.component';
import { RegisterInternComponent } from './components/register-intern/register-intern.component';
import { LoginComponent } from './components/login/login.component';
import { CodeComponent } from './components/code/code.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BoardingPageComponent,
    RegisterInternComponent,
    LoginComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }