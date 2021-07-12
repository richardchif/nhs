import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ApprovedComponent } from './approved/approved.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { DisplayComponent } from './display/display.component';
import { DueComponent } from './due/due.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { HomeComponent } from './home/home.component';
import { LoadingaComponent } from './loadinga/loadinga.component';
import { LoadingbComponent } from './loadingb/loadingb.component';
import { PasswordfComponent } from './passwordf/passwordf.component';
import { PendingComponent } from './pending/pending.component';
import { SearchComponent } from './search/search.component';
import { SearchaComponent } from './searcha/searcha.component';
import { SignComponent } from './sign/sign.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:"",component:SearchComponent},
  {path:"search",component:SearchComponent},
  {path:"add",component:AddComponent},
  {path:"approved",component:ApprovedComponent},
  {path:"ctreateaccount",component:CreateaccountComponent},
  {path:"display",component:DisplayComponent},
  {path:"due",component:DueComponent},
  {path:"fpassword",component:FpasswordComponent},
  {path:"home",component:HomeComponent},
  {path:"searcha",component:PendingComponent},
  {path:"sign",component:SignComponent},
  {path:"loadinga",component:LoadingaComponent},
  {path:"loadingb",component:LoadingbComponent},
  {path:"passwordf",component:PasswordfComponent},
  {path:"update",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
