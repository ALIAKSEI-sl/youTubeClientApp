import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  authGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(public authorizationService: AuthorizationService) {}

  submitForm() {
    console.log(this.authGroup.controls.login.errors?.['required']);
    if(this.authGroup.value.login) {
      this.authorizationService.logIn();
      this.authorizationService.changeName(this.authGroup.value.login);
    } 
  }

  isLoginEmpty(): boolean {
    const control = this.authGroup.controls.login;
    return control.errors?.['required'] && control.touched;
  }

  isLoginEmail(): boolean {
    const control = this.authGroup.controls.login;
    return control.errors?.['email'] && control.touched;
  }

  isLoginPassword(): boolean {
    const control = this.authGroup.controls.password;
    return control.errors?.['required'] && control.touched;
  }
}
