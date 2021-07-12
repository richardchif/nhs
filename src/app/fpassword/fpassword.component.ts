import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.component.html',
  styleUrls: ['./fpassword.component.scss']
})
export class FpasswordComponent implements OnInit {

  sessionEmail:string="";
  userData:declaredData[];
  declared =new declaredData();
  public in=[];
  en:string;
  sessionValue:string="";
  localValue:string="";
  public Em:string;
  public richy:string;
  

constructor(private restApi:RestapiService,private router:Router) { }


ngOnInit(): void {
  this.sessionValue=localStorage.getItem("Email"); 
  if(this.sessionValue==null){
    this.router.navigateByUrl('/login');
  }
  else{
    //this.loadData();
  }
  
  }
  loadData(){
    return this.restApi.getData()
    .subscribe(data=>this.in=data);
    
  }
  onClickSubmit(){

    console.log(this.declared);
    this.restApi.updateP(this.declared)
    .subscribe(data => console.log(data), 
    (err)=> console.error("Failed! " + err));
    this.router.navigateByUrl('/sign');

}

}
