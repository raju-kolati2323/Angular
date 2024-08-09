import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrl: './getstarted.component.css'
})
export class GetstartedComponent {
  checkuser:any;
  
constructor(private route:Router){}
  getstarted(){
    this.route.navigateByUrl('/user/home/indian')
  }
}
