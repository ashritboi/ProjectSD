import { Injectable, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase'
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {  AngularFireList } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})

export class AuthService  {
  
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;
  u1: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public db: AngularFirestore,
    public dbf: AngularFireDatabase,
    public ngZone: NgZone,
    public router: Router) {

      dbf.list('/Users').valueChanges()
        .subscribe(u1 => {
        this.u1 = u1;
        console.log("made" + u1);
      })
     
    }
     
    insertUserData(userCredential: firebase.auth.UserCredential) {
      return this.db.doc(`Users/${userCredential.user.uid}`).set({
        email: this.newUser.email,
        firstname: this.newUser.firstName,
        lastname: this.newUser.lastName,
        role: "student" 
      })
    }   

  getUserState()  {
    return this.afAuth.authState;
  }

  get isLoggedIn(): boolean {
    return ( this.afAuth.authState!== null ) ? true : false;

  }

  login( email: string, password: string, role: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      
      .then(userCredential => {
        if(userCredential) {  

          if(role == "Advisor"){
            this.router.navigate(['/advisorpage']);
          }
          if(role == "Student"){
            this.router.navigate(['/studentpage']);
          }
          console.log(role + "this is role");

        }
      })
  }

  
  createUser(user) {
    console.log(user);
    this.afAuth.auth.createUserWithEmailAndPassword( user.email, user.password)
      .then( userCredential => {
        this.newUser = user;
        console.log(userCredential);
        userCredential.user.updateProfile( {
          displayName: user.firstName + ' ' + user.lastName,
          
        });
        //this.router.navigate(['/login']);

        this.insertUserData(userCredential)
          .then(() => {
            this.SendVerificationMail(); // Sending email verification notification, when new user registers

          });
      })
      
      .catch( error => {
        window.alert(error)
      });

  }

  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['login']);
    })
  }

  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }  

  logout() {
    return this.afAuth.auth.signOut().then(() =>{
    this.router.navigate(['login']);
  })
}

}