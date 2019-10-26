import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 

  constructor(private router: Router) { 
    
  }

  inscreverse(){
    this.router.navigate(['registry'])
  }

  login(){
    this.router.navigate(['login'])
  }
  ngOnInit() {
  }

}
