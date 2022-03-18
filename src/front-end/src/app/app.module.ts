import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ShowComponent } from './account-details/show/show.component';
import { WebapiService } from './webapi.service';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionsComponent } from './transactions/transactions.component';
import { ShowTransComponent } from './transactions/show-trans/show-trans.component';
import { AddTransComponent } from './transactions/add-trans/add-trans.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    ShowComponent,
    TransactionsComponent,
    ShowTransComponent,
    AddTransComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
