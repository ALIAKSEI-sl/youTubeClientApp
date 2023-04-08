import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { AuthorizationService } from 'src/app/auth-module/services/authorization.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit, OnDestroy {
  constructor(public authorizationService: AuthorizationService) {}

  isLogged!: boolean;

  userName!: string;

  subscriptionOnUserName!: Subscription;

  subscriptionOnIsLogged!: Subscription;

  ngOnInit(): void {
    this.subscriptionOnUserName = this.authorizationService.userName.subscribe(
      (name) => (this.userName = name)
    );
    this.authorizationService.checkLogIn();
    this.subscriptionOnIsLogged = this.authorizationService.isLogged.subscribe(
      (boolean) => (this.isLogged = boolean)
    );
  }

  ngOnDestroy(): void {
    this.subscriptionOnUserName.unsubscribe();
    this.subscriptionOnIsLogged.unsubscribe();
  }

  logOut() {
    if (this.isLogged) {
      this.authorizationService.logOut();
    }
  }
}
