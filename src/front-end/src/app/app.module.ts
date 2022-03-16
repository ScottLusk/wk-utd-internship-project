import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ShowComponent } from './account-details/show/show.component';
import { WebapiService } from './webapi.service';


@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
