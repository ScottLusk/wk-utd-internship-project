import { Component, Input, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';
import { Transaction } from 'src/app/Transaction';

@Component({
  selector: 'app-add-trans',
  templateUrl: './add-trans.component.html',
  styleUrls: ['./add-trans.component.css']
})
export class AddTransComponent implements OnInit {

  constructor(private service:WebapiService) { }
  transaction:Transaction

  ngOnInit(): void {
  }

  addTransaction(): void{
    var transaction = 
    {
      transactionDate :this.transaction.transactionDate,
      description: this.transaction.description,
      amount: this.transaction.amount
    };

    this.service.addTransaction(transaction).subscribe(res=>{
      alert(res.toString());
    });
  }
}
