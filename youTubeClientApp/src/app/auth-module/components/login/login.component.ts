import { Component } from '@angular/core';

import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userLogin = '';

  userPassword = '';

  isLoginOrPasswordEmpty = false;

  constructor(private authorizationService: AuthorizationService) {}

  logIn() {
    if (this.userLogin && this.userPassword) {
      this.authorizationService.logIn(this.userLogin);
    } else {
      this.isLoginOrPasswordEmpty = true;
    }
  }

  loginOrPasswordNotEmpty() {
    this.isLoginOrPasswordEmpty = false;
  }
}
