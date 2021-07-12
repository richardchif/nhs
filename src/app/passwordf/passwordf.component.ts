import { Component, OnInit } from '@angular/core';
import { declaredData } from '../data/data';
import {Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RestapiService } from '../data/restapi.service';

@Component({
  selector: 'app-passwordf',
  templateUrl: './passwordf.component.html',
  styleUrls: ['./passwordf.component.scss']
})
export class PasswordfComponent implements OnInit {

  userData:declaredData[];
  declared =new declaredData();
  constructor(private router:Router,private restApi:RestapiService) { }
  public push=[];



  ngOnInit(): void {
  }
  onClickSubmit(){

    console.log(this.declared);
    localStorage.setItem("Email", this.declared.Email);
     localStorage.setItem("Password", this.declared.Password);
     this.router.navigateByUrl('/loadinga');

}

}
