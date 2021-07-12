import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './sign/sign.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { HomeComponent } from './home/home.component';
import { PendingComponent } from './pending/pending.component';
import { ApprovedComponent } from './approved/approved.component';
import { AddComponent } from './add/add.component';
import { DueComponent } from './due/due.component';
import { DisplayComponent } from './display/display.component';
import { SearchComponent } from './search/search.component';
import { SearchaComponent } from './searcha/searcha.component';
import { LoadingaComponent } from './loadinga/loadinga.component';
import { LoadingbComponent } from './loadingb/loadingb.component';
import { PasswordfComponent } from './passwordf/passwordf.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    CreateaccountComponent,
    FpasswordComponent,
    HomeComponent,
    PendingComponent,
    ApprovedComponent,
    AddComponent,
    DueComponent,
    DisplayComponent,
    SearchComponent,
    SearchaComponent,
    LoadingaComponent,
    LoadingbComponent,
    PasswordfComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
