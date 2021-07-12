import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

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
  add(){
  this.router.navigateByUrl('/add');
  }
  update(){
  this.router.navigateByUrl('/update');
  }
ngOnInit(): void {
  this.sessionValue=localStorage.getItem("EN"); 
  if(this.sessionValue==null){
    this.router.navigateByUrl('/sign');
  }
  else{
    this.loadData();
  }
  
  }
  loadData(){
    console.log(this.sessionValue);
    return this.restApi.getPersonalData(this.sessionValue)
    .subscribe(data=>this.in=data);
  }
  headElements = ['Employee_ID', 'First_Name', 'Last_Name','Department', 'Course','Days left'];
  
  calculateDiff(date1,date0,PassMark){
    let ddate:any=new Date(date0);
    let currentDate:any=new Date();

    let days=Math.floor((ddate-currentDate)/(1000*60*60*24))+1;
    if(PassMark=="Pass"){
      if(currentDate<ddate){
        return days;
      }
      else{
        let odays=Math.floor((currentDate-ddate)/(1000*60*60*24)) ;
        let v="Overdue("+odays+")";
        return v;
      }
    }
    else{
      var answer="N/A";
      return answer;
    }
  }

}
