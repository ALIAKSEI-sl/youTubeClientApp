import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  filterWord = '';

  @Output() emitterFilterSearch = new EventEmitter<string>();

  @Output() emitterFilterDate = new EventEmitter();

  @Output() emitterFilterViews = new EventEmitter();

  filterSearch() {
    this.emitterFilterSearch.emit(this.filterWord);
  }

  filterDate() {
    this.emitterFilterDate.emit();
  }

  filterCountOfViews() {
    this.emitterFilterViews.emit();
  }
}
