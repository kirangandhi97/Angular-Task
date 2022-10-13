import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 companyData = [
  {companyName:"1Rivet", companyDescription:"jhlshlhilkhglhglhg",companyTags:"python",companyLogo:"jdvbkdvbd"},
  {companyName:"2Divet", companyDescription:"jhlshlhilkhglhglhg",companyTags:"python",companyLogo:"jdvbkdvbd"},
  {companyName:"3Givet", companyDescription:"jhlshlhilkhglhglhg",companyTags:"python",companyLogo:"jdvbkdvbd"},
 ]
}
