import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetOnlyDirective } from './directives/alphabet-only.directive';
import { NameLogoPipe } from './Pipes/NameLogoPipe/name-logo.pipe';
import { SearchCompanyPipe } from './Pipes/searchCompanyPipe/search-company.pipe';
import { BreadCrumbsComponent } from './breadCrumb/bread-crumbs/bread-crumbs.component';



@NgModule({
  declarations: [
    AlphabetOnlyDirective,
    NameLogoPipe,
    SearchCompanyPipe,
    BreadCrumbsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NameLogoPipe,
    SearchCompanyPipe,
    BreadCrumbsComponent
  ]
})
export class SharedModule { }
