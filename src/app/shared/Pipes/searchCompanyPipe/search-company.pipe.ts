import { Pipe, PipeTransform } from '@angular/core';
import { Company } from 'src/app/company/company.model';

@Pipe({
  name: 'searchCompany'
})
export class SearchCompanyPipe implements PipeTransform {

  transform(value: Company[], searchTerm: string): any {
    // if(!value || !searchTerm){
    //   return value;
    // }

    // return value.filter(company => {
    //   company.companyName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    //   //  || company.companyTags.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    // });
    // if(!value) return ;

    if (searchTerm.length === 0) {
      return value
    }

    return value.filter((company) => {
      return company.companyName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    });


  }


}

