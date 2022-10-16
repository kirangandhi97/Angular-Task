import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameLogo'
})
export class NameLogoPipe implements PipeTransform {

  transform(value: string): string {
    value = value.toUpperCase();
    const result = value.split(' ');
    return `${result[0].charAt(0)}${result[1].charAt(0)}`;
    
    
  }

}
