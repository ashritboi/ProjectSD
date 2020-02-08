import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  authError: any;

  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }

 

  createUser(frm) {
    this.auth.createUser(frm.value);
  }


}
