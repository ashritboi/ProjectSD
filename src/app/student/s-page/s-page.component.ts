import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s-page',
  templateUrl: './s-page.component.html',
  styleUrls: ['./s-page.component.css']
})
export class SPageComponent implements OnInit {
  user: firebase.User;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      })
  }
  logout(){
    return this.auth.logout().then(() =>{
      this.router.navigate(['login']);
  });}
}
