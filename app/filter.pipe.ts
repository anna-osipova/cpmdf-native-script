import { Pipe, PipeTransform } from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value, args?) {
    // ES6 array destructuring
    let [searchText] = args;
    return value.filter(item => {
      return typeof searchText == 'undefined' || searchText == '' || item.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }

}
