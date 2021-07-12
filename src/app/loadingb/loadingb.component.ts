import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import { from } from 'rxjs';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-loadingb',
  templateUrl: './loadingb.component.html',
  styleUrls: ['./loadingb.component.scss']
})
export class LoadingbComponent implements OnInit {

  userData:declaredData[];
  declared =new declaredData();
  constructor(private router:Router,private restApi:RestapiService) { }
  public push=[];
  sessionEmail:string="";
  sessionPass:string="";

  ngOnInit(): void {
  	setTimeout(()=>{
      this.router.navigateByUrl('/display');
  	},
  	5000); 
  	
  }


}
