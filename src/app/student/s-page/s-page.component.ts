import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-s-page',
  templateUrl: './s-page.component.html',
  styleUrls: ['./s-page.component.css']
})
export class SPageComponent implements OnInit {
  user: firebase.User;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      })
  }
  logout() {
    this.auth.logout();
  }

}
