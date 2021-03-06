
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BoardingPageComponent } from './components/boarding-page/boarding-page.component';
import { CodeComponent } from './components/code/code.component';
import { ImageComponent } from './components/image/image.component';
import { LoginComponent } from './components/login/login.component';
import { PassComponent } from './components/pass/pass.component';
import { Quesitnners1Component } from './components/quesitnners1/quesitnners1.component';
import { Quesitnners2Component } from './components/quesitnners2/quesitnners2.component';
import { RegisterInternComponent } from './components/register-intern/register-intern.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';
import { TestFileComponent } from './components/test-file/test-file.component';

const routes: Routes = [
  {path:"",component:BoardingPageComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterInternComponent},
  {path:"code",component:CodeComponent},
  {path:"code/:ID",component:CodeComponent},
  {path:"image",component:ImageComponent},
  {path:"pass",component:PassComponent},
  {path:"quesitnners1",component:Quesitnners1Component},
  {path:"testFile",component:TestFileComponent},
  {path:"quesitnners2",component:Quesitnners2Component},
  {path:"admin/:name/:ID/:password",component:AdminComponent},
  {path:"supervisor",component:SupervisorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
