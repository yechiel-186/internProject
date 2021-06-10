
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardingPageComponent } from './components/boarding-page/boarding-page.component';
import { CodeComponent } from './components/code/code.component';
import { ImageComponent } from './components/image/image.component';
import { LoginComponent } from './components/login/login.component';
import { PassComponent } from './components/pass/pass.component';
import { Quesitnners1Component } from './components/quesitnners1/quesitnners1.component';
import { RegisterInternComponent } from './components/register-intern/register-intern.component';

const routes: Routes = [
  {path:"",component:BoardingPageComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterInternComponent},
  {path:"code",component:CodeComponent},
  {path:"image",component:ImageComponent},
  {path:"pass",component:PassComponent},
  {path:"quesitnners1",component:Quesitnners1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
