import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username:any;
  password:any;
  cp:any;
  reqd:any;
  contact:any;
  email:any;
  signuped:any;
  signupform:FormGroup=new FormGroup({})
  constructor(private route:Router, private fb:FormBuilder){
    this.signupform=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      cp:['',Validators.required],
      email:['',Validators.required],
      contact:['',Validators.required],
  })
  }
  signup(){
    this.reqd=this.signupform.value.username.slice(0,4);
    this.reqd=this.reqd+'123';
    if(this.signupform.value.password==this.reqd&&this.signupform.value.cp==this.reqd){
      this.signuped={
        username:this.signupform.value.username,
        reqd:this.reqd,
        email:this.signupform.value.email,
        contact:this.signupform.value.contact,
    }
    localStorage.setItem('user',JSON.stringify(this.signuped))
    Swal.fire({
      title:'Registraion success',
      text:'Click OK to go to login page',
      icon:'success',
    })
    this.route.navigateByUrl('/')
  }
    else{
      alert('Enter details in the correct format to signup')
    }
  }
}
