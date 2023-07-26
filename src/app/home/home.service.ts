import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HomeService {
  public homedata = new BehaviorSubject('')
  constructor() { }


  getSelectData() {
    return this.homedata;
  }



}