// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import {ServersComponent} from './servers/servers.component';
// import { LoginComponent } from './login/login.component';
// import { SPageComponent} from './student/s-page/s-page.component'
// import { APageComponent} from './advisor/a-page/a-page.component'
// import { SignupComponent } from './signup/signup.component'
// import {LoginAdvisorComponent} from './login-advisor/login-advisor.component'


// import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
// //import { AuthGuard } from "./shared/guard/auth.guard";
// import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// const routes: Routes = [
//   {path: 'home', component: ServersComponent},
//   {path: 'login', component: LoginComponent},
//   {path: 'advisorlogin', component: LoginAdvisorComponent},
//   {path:'advisorpage', component:APageComponent},
//   {path:'studentpage', component:SPageComponent},
//   {path:'', redirectTo: '/home', pathMatch: 'full'},
//   {path: 'signup', component:SignupComponent},
//   {path: 'forgot-password', component: ForgotPasswordComponent },
//   { path: 'verify-email-address', component: VerifyEmailComponent }

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
// export const routingComponents = [ServersComponent,LoginComponent,SPageComponent,APageComponent,SignupComponent,LoginAdvisorComponent]


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServersComponent} from './servers/servers.component';
import { LoginComponent } from './login/login.component';
import { SPageComponent} from './student/s-page/s-page.component'
import { APageComponent} from './advisor/a-page/a-page.component'
import { SignupComponent } from './signup/signup.component'
import {LoginAdvisorComponent} from './login-advisor/login-advisor.component'
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import {AuthGuard} from './shared/guard/auth.guard'
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard.ts.guard";

const routes: Routes = [
  {path: 'home', component: ServersComponent},
  {path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]},
  {path: 'advisorlogin', component: LoginAdvisorComponent, canActivate: [SecureInnerPagesGuard]},
  {path:'advisorpage', component:APageComponent, canActivate: [SecureInnerPagesGuard]},
  {path:'studentpage', component:SPageComponent, canActivate: [SecureInnerPagesGuard]},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'signup', component:SignupComponent, canActivate: [SecureInnerPagesGuard]},
  {path: 'forgotpassword', component: ForgotPasswordComponent, canActivate: [AuthGuard] },
  { path: 'verifyemail', component: VerifyEmailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ServersComponent,LoginComponent,SPageComponent,APageComponent,SignupComponent,LoginAdvisorComponent,VerifyEmailComponent,ForgotPasswordComponent]