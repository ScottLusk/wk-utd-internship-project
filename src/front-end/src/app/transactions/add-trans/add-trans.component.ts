import { Component, Input, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';
import { Transaction } from 'src/app/Transaction';
import { FormControl, FormGroup, NgForm, FormBuilder } from '@angular/forms';
import { TransactionRequest } from 'src/app/TransactionRequest';

@Component({
  selector: 'app-add-trans',
  templateUrl: './add-trans.component.html',
  styleUrls: ['./add-trans.component.css']
})
export class AddTransComponent implements OnInit {

  @Input() dep:any;
  AccountNumber:string = "123";
  tranDate:string;
  description:string;
  amount:number
  tranType:number
  request:TransactionRequest

  constructor(private service:WebapiService) { }
  
  ngOnInit(): void {
    this.tranDate=this.dep.tranDate,
    this.description=this.dep.description;
    this.amount=this.dep.amount;
    this.tranType=Number(this.dep.tranType);
  }

  addTransaction(){
    this.request = { TransactionDate:this.tranDate,
                Description:this.description,
                Amount:this.amount,
                Type:Number(this.tranType),
                AccountNumber:this.AccountNumber};
    this.service.addTransaction(this.request).subscribe(res=>{
      alert('Success');
    });
  }
}
