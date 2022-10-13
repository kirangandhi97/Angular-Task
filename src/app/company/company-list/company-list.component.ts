import { Component, OnInit } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
public listCompanyData:Company[];
  constructor(private companyService:CompanyService) { 
    this.listCompanyData = [];
  }

  ngOnInit(): void {
    this.getAllCompanyData();
  }
//   dummy data for test
//  companyData = [
//   {companyName:"1Rivet", companyDescription:"jhlshlhilkhglhglhg",companyTags:"python",companyLogo:"jdvbkdvbd"},
//   {companyName:"2Divet", companyDescription:"jhlshlhilkhglhglhg",companyTags:"python",companyLogo:"jdvbkdvbd"},
//   {companyName:"3Givet", companyDescription:"jhlshlhilkhglhglhg",companyTags:"python",companyLogo:"jdvbkdvbd"},
//  ]

getAllCompanyData(){
  this.companyService.getAllData().subscribe((companyData)=>
  {
    this.listCompanyData = companyData;
    console.log(this.listCompanyData);
    
  })
}

}
