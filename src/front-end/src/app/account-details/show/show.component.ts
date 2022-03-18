import { Component, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';
import { Account } from 'src/app/Account';
import { TransactionList } from 'src/app/TransactionList';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
  AccountNumber:string = "123";
  loading: boolean = false;
  errorMessage:any;
  accountdetails:Account
  transactionList:TransactionList;

  constructor(private service:WebapiService) { 
  }

  ngOnInit(): void {
    this.refreshAccountDetails();
    this.refreshTransactionList();
  }

  refreshAccountDetails(){
    this.service.getAccountDetails(this.AccountNumber).subscribe(data=>{
      this.accountdetails=data;
    })
  }
  refreshTransactionList(){
    this.service.getTransactions(this.AccountNumber).subscribe(data=>{
      this.transactionList=data;
    })
  }
}    

