import { Pipe, PipeTransform } from '@angular/core';
import { DATE_FORMAT_LONG_US } from '../definitions';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(date: Date | string | number): string {
    return DATE_FORMAT_LONG_US(new Date(date));
  }
}
