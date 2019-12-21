import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
export const firebaseConfig = {
  apiKey: "AIzaSyAnM-6Sg7Sqg7lQcfQtYEq3NOS-prYQwf4",
    authDomain: "seniordesign-1a0fc.firebaseapp.com",
    databaseURL: "https://seniordesign-1a0fc.firebaseio.com",
    projectId: "seniordesign-1a0fc",
    storageBucket: "seniordesign-1a0fc.appspot.com",
    messagingSenderId: "376271261984",
    appId: "1:376271261984:web:d58b23771590a8fff64745",
    measurementId: "G-YRZ0SR3Z37"
}

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
