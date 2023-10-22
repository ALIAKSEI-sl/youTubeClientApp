import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uploadDateFormat',
})
export class UploadDateFormatPipe implements PipeTransform {
  transform(publishedAt: string): string {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const date = new Date(publishedAt);

    return `${days[date.getDay()]}, ${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  }
}
