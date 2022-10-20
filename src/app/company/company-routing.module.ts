import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyComponent } from './company.component';
import { GetDatabyIdResolver } from './get-databy-id.resolver';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'add'
      },
      {
        path: 'add',
        component: CompanyFormComponent,
        // data: { breadcrumb: { alias: 'Add' } }
      },
      {
        path: 'edit/:id',
        component: CompanyFormComponent,
        // data: { breadcrumb: { alias: 'Edit' } },
        resolve: { companyData: GetDatabyIdResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
