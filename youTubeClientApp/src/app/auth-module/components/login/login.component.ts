import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  authGroup = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  })

  constructor(public authorizationService: AuthorizationService) {}

  submitForm() {
    this.authorizationService.logIn();
    this.authorizationService.changeName(this.authGroup.value.login);
  }
}
