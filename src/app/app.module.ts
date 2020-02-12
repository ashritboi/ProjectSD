import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { SPageComponent } from './student/s-page/s-page.component';
import { APageComponent } from './advisor/a-page/a-page.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule, AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {AuthService} from './auth/auth.service';

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
    MembersComponent,
    SPageComponent,
    APageComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFirestoreDocument,
    AngularFirestore,
    AngularFireDatabase,
    AngularFirestoreCollection
    ],
  providers: [AuthService],
  bootstrap: [AppComponent],

})
export class AppModule { }
