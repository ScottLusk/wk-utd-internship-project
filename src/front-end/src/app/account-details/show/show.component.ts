import { Component, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';
import { Account } from 'src/app/Account';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  AccountNumber:string = "1234";
  loading: boolean = false;
  errorMessage:any;
  accountdetails:Account


  constructor(private service:WebapiService) { 

  }

  AccountDetails:any;

  ngOnInit(): void {
    this.refreshAccountDetails();
    this.getAccountDetails();
  }

  refreshAccountDetails(){
    // this.service.getAccountDetails(this.AccountNumber).subscribe(data=>{
    //   this.AccountDetails=data;
    // })
  }

  public getAccountDetails() {
    this.accountdetails = this.service.getAccountDetails(this.AccountNumber);
  }
}    

