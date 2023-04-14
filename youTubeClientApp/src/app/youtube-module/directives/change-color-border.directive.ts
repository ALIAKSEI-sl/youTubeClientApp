import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { TypeElementColorDirective } from '../models/search-response.model';

@Directive({
  selector: '[appChangeColorBorder]',
})
export class ChangeColorBorderDirective implements OnInit {
  @Input() publicationDate = '';

  @Input() typeElement: TypeElementColorDirective | string = '';

  colorRgb = '';

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.changeColor();
  }

  colorDefinition() {
    const timestamp = Date.now() - new Date(this.publicationDate).getTime();
    const countDay = Math.floor(timestamp / 86400000);
    if (countDay < 7) {
      this.colorRgb = '47, 128, 237';
    } else if (countDay < 32) {
      this.colorRgb = '39, 174, 96';
    } else if (countDay < 184) {
      this.colorRgb = '242, 201, 76';
    } else {
      this.colorRgb = '235, 87, 87';
    }
  }

  addBorderBottom() {
    this.element.nativeElement.style.borderBottom = `5px solid rgb(${this.colorRgb})`;
  }

  addBackgroundColor() {
    this.element.nativeElement.style.backgroundColor = `rgb(${this.colorRgb})`;
  }

  addFilter() {
    let filter = '';
    if (this.typeElement === 'item-card') {
      filter = `drop-shadow(5px 10px 10px rgba(${this.colorRgb}, 0.5))`;
    } else if (this.typeElement === 'button-back') {
      filter = `drop-shadow(-2px 2px 4px rgba(${this.colorRgb}, 0.5))`;
    }
    this.element.nativeElement.style.filter = filter;
  }

  changeColor() {
    this.colorDefinition();
    if (this.typeElement === 'itemResponse') {
      this.addBorderBottom();
    }
    if (this.typeElement === 'item-card') {
      this.addFilter();
    }
    if (this.typeElement === 'button-back') {
      this.addBackgroundColor();
      this.addFilter();
    }
    if (this.typeElement === 'block-description') {
      this.addBorderBottom();
    }
  }
}
