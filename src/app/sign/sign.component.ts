import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  userData:declaredData[];
  declared =new declaredData();
  constructor(private router:Router,private restApi:RestapiService) { }
  public push=[];



  ngOnInit(): void {
  }
  fpassword(){
    this.router.navigateByUrl('/fpassword');
  }
  onClickSubmit(){

    console.log(this.declared);
    localStorage.setItem("Email", this.declared.Email);
     localStorage.setItem("Password", this.declared.Password);
     this.router.navigateByUrl('/loadinga');

}

}
