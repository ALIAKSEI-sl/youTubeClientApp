import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  isLogged$ = new BehaviorSubject(false);

  userName$ = new BehaviorSubject('You Name');

  isLogged: Observable<boolean>;

  userName: Observable<string>;

  constructor(private router: Router) {
    this.isLogged = this.isLogged$.asObservable();
    this.userName = this.userName$.asObservable();
  }

  checkLogIn() {
    const token = localStorage.getItem('userToken');
    const name = localStorage.getItem('userName');
    if (token && name) {
      this.isLogged$.next(true);
      this.userName$.next(name);
    }
  }

  changeName(name: string) {
    this.userName$.next(name);
    localStorage.setItem('userName', name);
  }

  logOut() {
    this.isLogged$.next(false);
    this.userName$.next('You Name');
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    this.router.navigateByUrl('/auth');
  }

  logIn() {
    this.isLogged$.next(true);
    const token = 'eyJhbGciOiJIUzUxMiIsI';
    localStorage.setItem('userToken', token);
    this.router.navigateByUrl('/main');
  }
}
