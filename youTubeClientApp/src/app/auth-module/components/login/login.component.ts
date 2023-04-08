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

  constructor(public authorizationService: AuthorizationService) {}

  logIn() {
    if (this.userLogin && this.userPassword) {
      this.authorizationService.logIn();
      this.authorizationService.changeName(this.userLogin);
    } else {
      this.isLoginOrPasswordEmpty = true;
    }
  }
}
