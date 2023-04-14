import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  userName = 'You Name';

  isButtonVisible = false;

  constructor(private router: Router) {}

  checkLogIn() {
    const token = localStorage.getItem('userToken');
    const name = localStorage.getItem('userName');
    if (token && name) {
      this.isButtonVisible = !this.isButtonVisible;
      this.userName = name;
    }
  }

  changeName(name: string) {
    this.userName = name;
    localStorage.setItem('userName', name);
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.userName = 'You Name';
    this.router.navigateByUrl('/auth');
    this.isButtonVisible = !this.isButtonVisible;
  }

  changeButtonVisibility() {
    this.isButtonVisible = !this.isButtonVisible;
  }

  logIn(name: string) {
    const token = 'eyJhbGciOiJIUzUxMiIsI';
    localStorage.setItem('userToken', token);
    this.router.navigateByUrl('/main');
    this.changeName(name);
    this.changeButtonVisibility();
  }
}
