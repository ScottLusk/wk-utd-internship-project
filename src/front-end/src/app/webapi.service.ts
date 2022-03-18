import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/Transaction';
import { Account } from 'src/app/Account';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  readonly APIBaseUrl="https://localhost:7288";
  
  constructor(private http:HttpClient) { }

  getAccountDetails(accountNumber:string){
    let params = new HttpParams().set('accountNumber', accountNumber);
    return this.http.get<any>(this.APIBaseUrl+'/api/account/details',{params: params} );
  }

  getTransactions(accountNumber:string){
    let params = new HttpParams().set('accountNumber', accountNumber);
    return this.http.get<any>(this.APIBaseUrl+'/api/account/summary',{params: params} );
  }

  addTransaction(transaction:any){
    const h = new HttpHeaders().set('Content-Type','application/json');
    const t = JSON.stringify(transaction);
    return this.http.post(this.APIBaseUrl+'/api/transaction/create', t, {headers: h});
  }

}
