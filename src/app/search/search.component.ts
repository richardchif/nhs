import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title = 'proj1';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  search(){
    this.router.navigateByUrl('/searcha');
  }
  sign(){
    this.router.navigateByUrl('/sign');
  }
  fpassword(){
    this.router.navigateByUrl('/fpassword');
  }

}
