import { Injectable } from '@angular/core';
import { order } from './userorder';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserorderService {

  constructor() { }
  orderlist:order[]=[]
  getbooking(pro:order){
    this.orderlist.push(pro)
  }
  getorders(){
    return of(this.orderlist)
  }
}
