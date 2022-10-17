import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './company.service';
import { SharedModule } from '../shared/shared.module';
import { BreadcrumbModule } from 'xng-breadcrumb';

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyFormComponent,
    CompanyListComponent,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    BreadcrumbModule
  
    
  ],
  providers:[
    CompanyService
  ]
})
export class CompanyModule { }
