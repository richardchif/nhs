import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

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
home(){
  this.router.navigateByUrl('/home');
}
sign(){
  this.router.navigateByUrl('/sign');
}
due(){
this.router.navigateByUrl('/due');
}
add(){
this.router.navigateByUrl('/add');
}
update(){
  this.router.navigateByUrl('/update');
}


ngOnInit(): void {
  this.sessionValue=localStorage.getItem("Email"); 
  if(this.sessionValue==null){
    this.router.navigateByUrl('/login');
  }
  else{
    this.loadData();
  }
  
  }
  loadData(){
    return this.restApi.getData()
    .subscribe(data=>this.in=data);
    
  }
  onClickSubmit(){

    console.log(this.declared);
    this.restApi.update(this.declared)
    .subscribe(data => console.log(data), 
    (err)=> console.error("Failed! " + err));
    this.router.navigateByUrl('/home');

}

}
