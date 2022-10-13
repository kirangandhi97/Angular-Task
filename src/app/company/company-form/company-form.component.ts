import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
public tags:any;
public isSubmitted:boolean=false;
public companyForm:FormGroup;
  constructor(private fb:FormBuilder) {
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
    
    
  }

  onSave(){
    this.isSubmitted=true;
    console.log(this.companyForm);
  }
}
