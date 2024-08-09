import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  reqd:any;
  checkuser:any;
  loginform:FormGroup=new FormGroup({})
  constructor(private route:Router, private fb:FormBuilder){
    this.loginform=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }
  ngOnInit(){
    if(localStorage.getItem('user')!=null){
      this.checkuser=localStorage.getItem('user');
      this.checkuser=JSON.parse(this.checkuser);
    }
  }
  login(){
    if(this.loginform.value.username=='admin'&&this.loginform.value.password=='admin123'){
      alert('Login success')
      this.route.navigateByUrl('/admin/home')
    }
    else{
      if(localStorage.getItem('user')==null){
        alert('Create new account and then try login')
      }
      else if(this.loginform.value.username==this.checkuser.username&&this.loginform.value.password==this.checkuser.reqd){
        alert('Login success')
        this.route.navigateByUrl('/user/getstarted')
      }
      else if(this.loginform.value.username!=this.checkuser.username || this.loginform.value.password!=this.checkuser.reqd){
        alert('Enter correct input details')
      }
    }}
}
