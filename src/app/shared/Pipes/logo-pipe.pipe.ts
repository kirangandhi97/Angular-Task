import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logoPipe'
})
export class LogoPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
