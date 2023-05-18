import * as moment from 'moment';

export function DATE_FORMAT_LONG_US(date: Date): string {
  return moment(date).format('LLL');
}
