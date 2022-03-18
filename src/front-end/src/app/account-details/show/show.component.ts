import { Component, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';
import { Account } from 'src/app/Account';

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


  constructor(private service:WebapiService) { 

  }


  ngOnInit(): void {
    this.refreshAccountDetails();
    // this.getAccountDetails();
  }

  refreshAccountDetails(){
    this.service.getAccountDetails(this.AccountNumber).subscribe(data=>{
      debugger;
      this.accountdetails=data;
    })
  }

  // public getAccountDetails() {
  //   this.accountdetails = this.service.getAccountDetails(this.AccountNumber);
  // }
}    

