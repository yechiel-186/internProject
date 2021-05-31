
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardingPageComponent } from './components/boarding-page/boarding-page.component';
import { CodeComponent } from './components/code/code.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterInternComponent } from './components/register-intern/register-intern.component';

const routes: Routes = [
  {path:"",component:BoardingPageComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterInternComponent},
  {path:"code",component:CodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }