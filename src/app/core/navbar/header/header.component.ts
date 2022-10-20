import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public company_name!:string;
  constructor(private datasharingService:DataSharingService) {

   }


  ngOnInit(): void {
    this.datasharingService.breadCrumbs.subscribe((company_Name)=>{
      console.log(company_Name);
      
      this.company_name = company_Name
    })
  }

}
