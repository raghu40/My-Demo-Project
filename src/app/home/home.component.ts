import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public user;
  public getData;
  constructor(private modalService: NgbModal, public httpclient: HttpClient, public mySerice:HomeService) {
    this.user = { name: 'JEF', age: 20 };
  }

  ngOnInit() {
    this.httpclient.get("assets/data.json").subscribe((data) => { 
      console.log(data);
      this.getData = data;
    });
  }

  passData(data){ 
 // this.router.navigateByUrl('/homedetails')
   // this.router.navigate(['/homedetails']);
    this.mySerice.homedata.next(data);
  }
}
