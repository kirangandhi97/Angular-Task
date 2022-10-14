import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
public tags:any;
public isSubmitted:boolean=false;
public companyForm:FormGroup;
public id:any;
  constructor(private fb:FormBuilder, private companyService:CompanyService, private activatedroute:ActivatedRoute) {
    // get params from activated route 
    this.activatedroute.params.subscribe((params)=>{
      this.id = params['id'];
      this.getCompanyDatabyId();
    })

    this.tags = [
      { name: "frontend"},
      { name: "python"},
      { name: "qa"}
    ]

  // Reactive Form 
  this.companyForm = this.fb.group({
    companyName:['',[Validators.required]],
    companyDescription:['',[Validators.required]],
    companyTags:['',[Validators.required]],
    companyLogo:['',[Validators.required]]
  })
   }

  ngOnInit(): void {
    // this.getCompanyDatabyId();
  }

  onSave(){
    this.isSubmitted=true;
    // console.log(this.companyForm);
    if(this.companyForm.valid){
      if(this.id){
        this.getUpdateData();
      }
      else{
        
      }
    }
    
  }

  getAllCompanyData(){
    this.companyService.getAllData().subscribe((companyData)=>
    {})
  }

  getCompanyDatabyId(){
    this.companyService.getDataById(this.id).subscribe((company:Company)=>{
      this.companyForm.patchValue(company);
      // console.log(company);  
    })
  }

  getUpdateData(){
    this.companyService.updateData( this.id, this.companyForm.value).subscribe((company:Company)=>{
      console.log(company);
      this.getAllCompanyData();
      
    })
  }
}
