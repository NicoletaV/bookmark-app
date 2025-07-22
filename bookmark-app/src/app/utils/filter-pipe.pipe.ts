import { Pipe, PipeTransform } from '@angular/core';
import { Bookmark } from '../models/bookmark/bookmark';

@Pipe({
  name: 'filterPipe',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: Bookmark[], filterString: string) {
    return value.filter(item => item.created.toLowerCase() == filterString.toLowerCase());
  }
}