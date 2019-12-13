import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServersComponent} from './servers/servers.component';
import { LoginComponent } from './login/login.component';
import { LoginAdvisorComponent } from './login-advisor/login-advisor.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'advisorlogin', component:LoginAdvisorComponent},
  {path:'serverscomponent', component:ServersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ServersComponent,LoginComponent,LoginAdvisorComponent]