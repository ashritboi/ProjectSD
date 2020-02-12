import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-advisor',
  templateUrl: './login-advisor.component.html',
  styleUrls: ['./login-advisor.component.css']
})
export class LoginAdvisorComponent implements OnInit {

  authError: any;


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }

  login(frm) {
    this.auth.login(frm.value.email, frm.value.password, "Advisor");
  }

   
}
