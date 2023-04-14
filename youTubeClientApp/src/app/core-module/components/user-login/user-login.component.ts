import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from 'src/app/auth-module/services/authorization.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  constructor(public authorizationService: AuthorizationService) {}

  ngOnInit(): void {
    this.authorizationService.checkLogIn();
  }

  logOut() {
    this.authorizationService.logOut();
  }
}
