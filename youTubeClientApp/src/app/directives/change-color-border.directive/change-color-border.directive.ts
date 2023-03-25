import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColorBorder]',
})
export class ChangeColorBorderDirective implements AfterViewInit {
  @Input() publicationDate: string;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    const timestamp = Date.now() - new Date(this.publicationDate).getTime();
    const countDay = Math.floor(timestamp / 86400000);
    const valueBorder = '5px solid';
    if (countDay < 7) {
      this.element.nativeElement.style.borderBottom = `${valueBorder} blue`;
    } else if (countDay < 32) {
      this.element.nativeElement.style.borderBottom = `${valueBorder} green`;
    } else if (countDay < 184) {
      this.element.nativeElement.style.borderBottom = `${valueBorder} yellow`;
    } else {
      this.element.nativeElement.style.borderBottom = `${valueBorder} red`;
    }
  }
}
