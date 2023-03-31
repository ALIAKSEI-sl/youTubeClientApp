import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  filterWord = '';

  @Output() searchFilter = new EventEmitter<string>();

  @Output() dateFilter = new EventEmitter();

  @Output() viewsFilter = new EventEmitter();

  startFilterSearch() {
    this.searchFilter.emit(this.filterWord);
  }

  startFilterDate() {
    this.dateFilter.emit();
  }

  startFilterCountOfViews() {
    this.viewsFilter.emit();
  }
}
