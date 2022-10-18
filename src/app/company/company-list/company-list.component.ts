import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  public listCompanyData: Company[];
  public searchTerm: string = '';
  public data: any;
  public Error:string='No Records Found'
  constructor(
    private companyService: CompanyService,
    private router: Router,
    private datasharingService: DataSharingService
  ) {

    this.listCompanyData = [];
  }

  ngOnInit(): void {
    this.datasharingService.dataSharing.subscribe((data: Company) => {
      if (data) {
        this.getAllCompanyData();
      }
    })
    this.getAllCompanyData();
    
  }
  //   dummy data for test
  //  companyData = [
  //   {companyName:"1Rivet", companyDescription:"jhlshlhilkhglhglhg",companyTags:"python",companyLogo:"jdvbkdvbd"},
  //   {companyName:"2Divet", companyDescription:"jhlshlhilkhglhglhg",companyTags:"python",companyLogo:"jdvbkdvbd"},
  //   {companyName:"3Givet", companyDescription:"jhlshlhilkhglhglhg",companyTags:"python",companyLogo:"jdvbkdvbd"},
  //  ]

  getAllCompanyData() {
    this.companyService.getAllData().subscribe((companyData) => {
      this.listCompanyData = companyData;
      // console.log(this.listCompanyData);
    });
  }

  onEdit(id: number) {
    this.router.navigate(['company/edit', id]);
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this Data??')) {
      this.companyService.deleteCompanyData(id).subscribe(() => {
        this.getAllCompanyData();
      });
      this.router.navigate(['company/add']);
    }
  }
  onAdd() {
    this.router.navigate(['company/add']);
  }

onSearch(data:Company[]){
    if(this.listCompanyData.length===0){
      console.log('no data');   
    };
  }
}
