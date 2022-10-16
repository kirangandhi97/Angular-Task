import { Pipe, PipeTransform } from '@angular/core';
import { Company } from 'src/app/company/company.model';

@Pipe({
  name: 'searchCompany'
})
export class SearchCompanyPipe implements PipeTransform {

  transform(value: Company[], searchTerm:string): Company[] {
    if(!value || !searchTerm){
      return value;
    }

    return value.filter(company => 
      company.companyName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
