import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/Transaction';
import { Account } from 'src/app/Account';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  readonly APIBaseUrl="https://localhost:7288";
  transactionList: Transaction[] = [
      {
        id:1,
        accountId:1,
        type:1,
        transactionDate:"1/1/2020",
        amount:1,
        description:"test",
        categoryId:1,
      },
      {
        id:2,
        accountId:11,
        type:1,
        transactionDate:"1/1/2020",
        amount:11,
        description:"test",
        categoryId:1
      },
      {
        id:3,
        accountId:111,
        type:1,
        transactionDate:"1/1/2020",
        amount:111,
        description:"test",
        categoryId:1
      }
    ];
  accountdetails: Account = { id :1, accountNumber :101, userId :1, firstName :"Toshal", middleName:"R",lastName:"Tambave"};
  constructor(private http:HttpClient) { }

  getAccountDetails(accountNumber:string){
    // TODO: append Account Number and add enpoint
    return this.accountdetails;
  }

  getTransactions(){
    return this.transactionList;
  }

  addTransaction(transaction:any){
    console.log('form data', transaction.toString())
    return this.http.post(this.APIBaseUrl+'test', transaction)
  }

}
