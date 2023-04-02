import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuth = Boolean(localStorage.getItem('userToken'));
    if (!isAuth) {
      this.router.navigateByUrl('/auth');
    }
    return isAuth;
  }
}
