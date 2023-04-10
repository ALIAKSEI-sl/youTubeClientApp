import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { AuthorizationService } from '../../services/authorization.service';
import { passwordValidator } from '../../validators/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  authGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator]),
  });

  constructor(public authorizationService: AuthorizationService) {}

  submitForm() {
    if (this.authGroup.valid) {
      if (this.authGroup.value.login) {
        this.authorizationService.logIn();
        this.authorizationService.changeName(this.authGroup.value.login);
      }
    } else {
      this.authGroup.markAllAsTouched();
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

  isPasswordEmpty(): boolean {
    const control = this.authGroup.controls.password;
    return control.errors?.['required'] && control.touched;
  }

  isPasswordStrong(): ValidationErrors | null {
    const control = this.authGroup.controls.password;
    return control.errors?.['strong'];
  }
}
