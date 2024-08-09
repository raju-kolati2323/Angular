import { Component } from '@angular/core';
import { UserorderService } from '../service/userorder.service';
import { order } from '../service/userorder';

@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrl: './userorders.component.css'
})
export class UserordersComponent {
  currentDateAndTime(): string {
    const now = new Date();
    return now.toLocaleString();
}
  orderlist:order[]=[]
  orders:any;
  constructor(private userorder:UserorderService, ){}
  ngOnInit(){
    this.userorder.getorders().subscribe((add:any)=>{
      this.orderlist=add
    })
  }
  }
