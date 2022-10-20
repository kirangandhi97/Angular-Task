import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';
import { Company } from 'src/app/company/company.model';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public dataSharing = new Subject<Company>;
  public breadCrumbs =new Subject<string>;
  // public breadCrumbs$ =new Observable<string>;
  constructor() { 
    
  }

  sendData(company:Company){
    this.dataSharing.next(company);
    // console.log(company);
    
  }

  // getData(){
  //   this.dataSharing.asObservable();
  //   // console.log(company);
    
  // }


}
