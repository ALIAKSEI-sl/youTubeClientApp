import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  areSettingsVisible = false;

  @Output() searchTermChange = new EventEmitter<string>();

  @Output() searchFilter = new EventEmitter<string>();

  @Output() dateFilter = new EventEmitter();

  @Output() viewsFilter = new EventEmitter();

  changeSettingsVisibility(areVisible: boolean) {
    this.areSettingsVisible = areVisible;
  }

  startSearchFormValue(value: string) {
    this.searchTermChange.emit(value);
  }

  startFilterSearch(value: string) {
    this.searchFilter.emit(value);
  }

  startFilterDate() {
    this.dateFilter.emit();
  }

  startFilterCountOfViews() {
    this.viewsFilter.emit();
  }
}
