import { Component } from '@angular/core';
import { ItalianService } from '../service/italian.service';
import { dishes } from '../service/dish';
import Swal from 'sweetalert2';
import { WishlistService } from '../service/wishlist.service';
import { UserorderService } from '../service/userorder.service';

@Component({
  selector: 'app-italian',
  templateUrl: './italian.component.html',
  styleUrl: './italian.component.css'
})
export class ItalianComponent {
  constructor(private dish:ItalianService, private wish:WishlistService, private userorder:UserorderService){}
  currentDateAndTime(): string {
    const now = new Date();
    return now.toLocaleString();
}
 dishlist:dishes[]=[]
 checkuser:any;
 dusername:any;
 did:any;
 ddishname:any;
 address:any;
 payment:any;
 details:any;
 order:any;
 dimage:any;
 image:any;
 dcost:any;
 cost:any;
 date:any;
 ngOnInit(){
  this.dish.getdishes3().subscribe((data:any)=>{
    this.dishlist=data;
    this.checkuser=localStorage.getItem('user');
      this.checkuser=JSON.parse(this.checkuser);
  }) 
}
wishlist(p:any){
  this.wish.addtowish(p)
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1700,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Dish added to wishlist"
  });
}
book(d:any){
  this.did=d.id,
  this.ddishname=d.dishname,
  this.dusername=this.checkuser.username,
  this.dimage=d.image,
  this.dcost=d.cost,
  this.date=d.date
}
confirm(){
  this.details={
    id:this.did,
    dishname:this.ddishname,
    username:this.dusername,
    address:this.address,
    payment:this.payment,
    image:this.dimage,
    cost:this.dcost,
    
  }
  this.order=this.userorder.getbooking(this.details)
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    imageUrl: "https://static.vecteezy.com/system/resources/previews/019/873/851/non_2x/clock-icon-transparent-free-icon-free-png.png",
    imageHeight: 100,
    imageWidth:100,
    title: "Your booking will be confirmed",
    html:'in <b>3</b> seconds',
    showConfirmButton: false,
    showCancelButton: false,
    timer: 3000,
    timerProgressBar: true, // Show a progress bar with the timer
    didOpen: () => {
      const htmlContainer = Swal.getHtmlContainer();
      if (htmlContainer) {
        const content = htmlContainer.querySelector('b');
        if (content) {
          let timerInterval = setInterval(() => {
            let current = parseInt(content.textContent || '0');
            if (current > 1) {
              content.textContent = (current - 1).toString();
            } else {
              clearInterval(timerInterval); // Stop the interval once it reaches 1
            }
          }, 1000);
        }
      }
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      swalWithBootstrapButtons.fire({
        title: "Your booking is confirmed.",
        text: "Thanks for booking.",
        icon: "success"
      });
    }
  });
}
}
