import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-detailed-home',
  templateUrl: './detailed-home.component.html',
  styleUrls: ['./detailed-home.component.css']
})
export class DetailedHomeComponent implements OnInit {
  pageData;
  constructor(public mySerice:HomeService) { }

  ngOnInit() {
    this.mySerice.getSelectData().subscribe(data => {
      this.pageData = data;
    })
  }

}