import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header-pages.component.html',
  styleUrls: ['./header-pages.component.scss'],
})
export class HeaderPagesComponent {
  areSettingsVisible = false;

  changeSettingsVisibility(areVisible: boolean) {
    this.areSettingsVisible = areVisible;
  }
}
