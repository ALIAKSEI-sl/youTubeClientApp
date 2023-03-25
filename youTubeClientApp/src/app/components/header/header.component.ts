import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  areSettingsVisible = false;

  @Output() emitterSearchFormValue = new EventEmitter<string>();

  @Output() emitterFilterSearch = new EventEmitter<string>();

  @Output() emitterFilterDate = new EventEmitter();

  @Output() emitterFilterCountOfViews = new EventEmitter();

  changeSettingsVisibility(areVisible: boolean) {
    this.areSettingsVisible = areVisible;
    console.log(this.areSettingsVisible);
  }

  getSearchFormValue(value: string) {
    this.emitterSearchFormValue.emit(value);
  }

  filterSearch(value: string) {
    this.emitterFilterSearch.emit(value);
  }

  filterDate() {
    this.emitterFilterDate.emit();
  }

  filterCountOfViews() {
    this.emitterFilterCountOfViews.emit();
  }
}
