import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetDatabyIdResolver } from './company/get-databy-id.resolver';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataSharingService } from './shared/services/data-sharing.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BreadcrumbModule
  ],
  providers: [GetDatabyIdResolver, DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
