import { Component } from '@angular/core';
import { order } from '../service/userorder';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  currentDateAndTime(): string {
    const now = new Date();
    return now.toLocaleString();
}
  allorderlist:order[]=[]
  constructor(private allorders:OrdersService){}
  ngOnInit(){
    this.allorders.allorders().subscribe((add:any)=>{
      this.allorderlist=add
    })
  }
}
