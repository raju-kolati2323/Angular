import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  checkuser:any;
  constructor(private route:Router){}
  ngOnInit(){
    if(localStorage.getItem('user')!=null){
      this.checkuser=localStorage.getItem('user')
      this.checkuser=JSON.parse(this.checkuser)
    }
    else{
      this.route.navigateByUrl('/');
      alert('Login to access')
    }
  }
  logout(){
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('user')
        this.route.navigateByUrl('/')
      }
    });
  }

}
