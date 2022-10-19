import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Company } from './company.model';
import { CompanyService } from './company.service';

@Injectable()
export class GetDatabyIdResolver implements Resolve<Company> {
  
  constructor(private companyService: CompanyService) {
  }

  resolve(activatedrouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> {
    const id = activatedrouteSnapshot.params['id'];
    return this.companyService.getDataById(id)
  }
}
