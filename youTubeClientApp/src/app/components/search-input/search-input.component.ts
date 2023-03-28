import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  valueInput = 'angular';

  areSettingsVisible = false;

  @Output() visibilitySettingsChange = new EventEmitter<boolean>();

  @Output() searchTermChange = new EventEmitter<string>();

  changeSettingsVisibility() {
    this.areSettingsVisible = !this.areSettingsVisible;
    this.visibilitySettingsChange.emit(this.areSettingsVisible);
  }

  sendValueInput() {
    this.searchTermChange.emit(this.valueInput);
  }
}
