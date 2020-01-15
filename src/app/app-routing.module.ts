import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServersComponent} from './servers/servers.component';
import { LoginComponent } from './login/login.component';
import { SPageComponent} from './student/s-page/s-page.component'
import { APageComponent} from './advisor/a-page/a-page.component'
import { SignupComponent } from './signup/signup.component'
import {LoginAdvisorComponent} from './login-advisor/login-advisor.component'


const routes: Routes = [
  {path: 'home', component: ServersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'advisorlogin', component: LoginAdvisorComponent},
  {path:'advisorpage', component:APageComponent},
  {path:'studentpage', component:SPageComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'signup', component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ServersComponent,LoginComponent,SPageComponent,APageComponent,SignupComponent,LoginAdvisorComponent]