import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetOnlyDirective } from './directives/alphabet-only.directive';
import { NameLogoPipe } from './Pipes/NameLogoPipe/name-logo.pipe';
import { SearchCompanyPipe } from './Pipes/searchCompanyPipe/search-company.pipe';



@NgModule({
  declarations: [
    AlphabetOnlyDirective,
    NameLogoPipe,
    SearchCompanyPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NameLogoPipe,
    SearchCompanyPipe
  ]
})
export class SharedModule { }
