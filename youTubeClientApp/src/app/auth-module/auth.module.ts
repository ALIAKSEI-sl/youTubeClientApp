import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared-module/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { StrongPasswordDirective } from './directives/strong-password.directive';

@NgModule({
  declarations: [LoginComponent, LoginPagesComponent, StrongPasswordDirective],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
})
export class AuthModule {}
