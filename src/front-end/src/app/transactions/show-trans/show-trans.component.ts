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

  constructor(private service:WebapiService) {
   }
  
  ngOnInit(): void {
    this.refreshTransactionList();
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
      debugger;
      this.transactionList=data;
    })
  }

}
