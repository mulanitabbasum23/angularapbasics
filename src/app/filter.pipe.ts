import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // Impure pipe
})
export class FilterPipe implements PipeTransform {


  transform(val: any, searchTearm: any): any {

   return val.filter(function(search: { name: string; }) {
      return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    });
  }


}