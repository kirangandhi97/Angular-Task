import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent implements OnInit {
  public tags: any;
  public isSubmitted: boolean = false;
  public companyForm: FormGroup;
  public id!: any;
  // public companyName!:string;
  public action!:string;
  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private datasharingService:DataSharingService,
    private breadcrumbService:BreadcrumbService
  ) {
    // get params from activated route
    this.activatedroute.params.subscribe((params) => {
      this.id = params['id'];
      this.getCompanyDatabyId();
    });

    this.tags = [{ name: 'frontend' }, { name: 'python' }, { name: 'qa' }];

    // Reactive Form
    this.companyForm = this.fb.group({
      companyName: ['', [Validators.required]],
      companyDescription: ['', [Validators.required]],
      companyTags: ['', [Validators.required]],
      companyLogo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // this.getCompanyDatabyId();
    if(this.id){
      this.breadcrumbService.set('@Edit', 'edit');
      this.action = 'Edit'
    }
    else{
      this.breadcrumbService.set('@Add', 'add');
      this.action = 'Add'
    }
  }

  onSave() {
    this.isSubmitted = true;
    if (this.companyForm.valid) {
      if (this.id) {
        this.getUpdateData();
      } else {
        this.postData();
      }
    }
    this.companyForm.reset();
  }

  postData() {
    this.companyService
      .postNewData(this.companyForm.value)
      .subscribe((company: Company) => {
        // console.log(company);
        this.datasharingService.sendData(company);
        // this.router.navigate(['company/add'])
      });
  }

  getAllCompanyData() {
    this.companyService.getAllData().subscribe((companyData) => {});
  }

  getCompanyDatabyId() {
    this.companyService
      .getDataById(Number(this.id))
      .subscribe((company: Company) => {
        this.companyForm.patchValue(company);
        // console.log(company);
        // this.companyName = company.companyName;
      });
  }

  getUpdateData() {
    this.companyService
      .updateData(this.id, this.companyForm.value)
      .subscribe((company: Company) => {
        this.datasharingService.sendData(company)
      });
    this.router.navigate(['company/add']);
  }
}
