import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs';
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
    searchTerm = searchTerm.toLowerCase()

  
    
    return value.filter((company) => {
      const d = JSON.stringify(company).toLowerCase().includes(searchTerm);
      // return company.companyName.toLowerCase().includes(searchTerm);
      // return company.companyName.toLowerCase().indexOf(searchTerm) >-1
      // const d = (
      //   company.companyName.toLowerCase().indexOf(searchTerm) >-1 || company.companyDescription.toLowerCase().indexOf(searchTerm) >-1 )
      return d;
    });


  }


}

