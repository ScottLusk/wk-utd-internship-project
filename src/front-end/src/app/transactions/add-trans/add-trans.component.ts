import { Component, Input, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';
import { Transaction } from 'src/app/Transaction';
import { FormControl, FormGroup, NgForm, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-trans',
  templateUrl: './add-trans.component.html',
  styleUrls: ['./add-trans.component.css']
})
export class AddTransComponent implements OnInit {

  @Input() dep:any;
  tranDate:string;
  description:string;
  amount:number
  tranType:number

  constructor(private service:WebapiService) { }
  
  ngOnInit(): void {
    this.tranDate=this.dep.tranDate,
    this.description=this.dep.description;
    this.amount=this.dep.amount;
    this.tranType=this.dep.tranType;
  }

  addDepartment(){
    alert('alert')
    var val = {tranDate:this.tranDate,

                description:this.description,
                amount:this.amount,
                tranType:this.tranType};
    console.log(val.tranDate.toString());
    this.service.addTransaction(val).subscribe(res=>{
      alert(res.toString());
    });
  }
}
