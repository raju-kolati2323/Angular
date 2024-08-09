import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';
import { category } from '../service/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private home:HomeService){}
  categorylist:category[]=[]
  ngOnInit(){
    this.home.getcategories().subscribe((data:any)=>{
      this.categorylist=data;
    })
  }
}
