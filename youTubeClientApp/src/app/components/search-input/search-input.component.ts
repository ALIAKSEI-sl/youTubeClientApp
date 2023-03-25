import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  searchForm = new FormControl('Angular');

  areSettingsVisible = false;

  searchFormValue = '';

  @Output() emitterSettingsVisible = new EventEmitter<boolean>();

  @Output() emitterSearchFormValue = new EventEmitter<string>();

  changeSettingsVisibility() {
    this.areSettingsVisible = !this.areSettingsVisible;
    this.emitterSettingsVisible.emit(this.areSettingsVisible);
  }

  getFormValue() {
    if (this.searchForm.value) {
      this.searchFormValue = this.searchForm.value;
    }
    this.searchForm.setValue('');
    this.emitterSearchFormValue.emit(this.searchFormValue);
  }
}
