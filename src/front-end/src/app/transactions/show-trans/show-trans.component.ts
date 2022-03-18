import { Component, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';
import { TransactionList } from 'src/app/TransactionList';


@Component({
  selector: 'app-show-trans',
  templateUrl: './show-trans.component.html',
  styleUrls: ['./show-trans.component.css']
})
export class ShowTransComponent implements OnInit {
  AccountNumber:string = "123";
  transactionList:TransactionList;
  ModalTitle:string="";
  ActivateAddTranComp:boolean=false;
  budget:number = 0;
  expenses:number = 0;

  constructor(private service:WebapiService) {
   }
  
  ngOnInit(): void {
    this.refreshTransactionList();
    this.calculateBudget();
  }

  addClick(){
    this.ModalTitle="Add Transaction";
    this.ActivateAddTranComp=true;
  }
  closeClick(){
    this.ActivateAddTranComp=false;
    this.refreshTransactionList();
  }

  refreshTransactionList(){
    this.service.getTransactions(this.AccountNumber).subscribe(data=>{
      this.transactionList=data;
    })
  }

  calculateBudget(){
    this.service.getTransactions(this.AccountNumber).subscribe(data=>{
      this.transactionList=data;
      for(let t in this.transactionList.Transactions){
        
        if(this.transactionList.Transactions[t].TransactionType==0){
          this.budget+=this.transactionList.Transactions[t].Amount;
        }
        else if(this.transactionList.Transactions[t].TransactionType==1){
          this.expenses+=this.transactionList.Transactions[t].Amount;
        }
      }
      console.log(this.budget+"budget");
      console.log(this.expenses+"expenses");
    })
  }

}
