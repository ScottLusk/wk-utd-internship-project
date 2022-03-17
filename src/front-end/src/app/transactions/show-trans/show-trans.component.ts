import { Component, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';
import { Transaction } from 'src/app/Transaction';

@Component({
  selector: 'app-show-trans',
  templateUrl: './show-trans.component.html',
  styleUrls: ['./show-trans.component.css']
})
export class ShowTransComponent implements OnInit {
  transactionList:Transaction[];
  ModalTitle:string="";
  ActivateAddTranComp:boolean=false;

  constructor(private service:WebapiService) {
    

    console.log(JSON.stringify(this.transactionList, null, 4));
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
    this.transactionList = this.service.getTransactions()
  }

}
