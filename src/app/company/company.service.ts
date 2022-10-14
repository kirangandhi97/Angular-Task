import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company.model';

@Injectable()
export class CompanyService {
public companyUrl:string;
  constructor(private httpclient:HttpClient) { 
    this.companyUrl = 'http://localhost:3000/company/'
  }

  // retrieve all data from server 
  getAllData():Observable<Company[]>{
    return this.httpclient.get<Company[]>(this.companyUrl);
  }

  getDataById(id:number):Observable<Company>{
    return this.httpclient.get<Company>(this.companyUrl+id)
  }

  updateData(id:number, company:Company):Observable<Company>{
    return this.httpclient.put<Company>(this.companyUrl+id, company);
  }

}
