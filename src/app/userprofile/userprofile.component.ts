import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {
  checkuser:any;
  username:any;
  gender:any;
  password:any;
  reqd:any;
  address:any;
  contact:any;
  firstname:any;
  lastname:any;
  email:any;
  dob:any;
  photo:any;
  currentpassword:any;
  newpassword:any;
  newpass:any;
  updatedprofile:any;
  flag:any;
  userform:FormGroup=new FormGroup({})
  constructor(private fb:FormBuilder){
    this.userform=this.fb.group({
      uname: ['', Validators.required],
      currentpassword: ['', Validators.required],
      newpassword: [''],
      firstname: [''],
      lastname: [''],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      dob: ['']
    })
  }
  
  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.checkuser = JSON.parse(storedUser);
      this.username = this.checkuser.username;
      this.password=this.checkuser.reqd;
      this.email=this.checkuser.email;
      this.contact=this.checkuser.contact;
      this.userform.patchValue({ //to update single value of object or a complete object
        uname: this.checkuser.username,
        email: this.checkuser.email,
        contact: this.checkuser.contact
      });
    }
  }
  edit(){
    this.flag=true;
  }
  savechanges(){
    this.flag=false;
    this.username=this.userform.value.uname;
    this.gender=this.userform.value.gender;
    this.email=this.userform.value.email;
    this.contact=this.userform.value.contact;
    this.firstname=this.userform.value.firstname;
    this.lastname=this.userform.value.lastname;
    this.address=this.userform.value.address;
    this.dob=this.userform.value.dob;
    this.currentpassword=this.userform.value.currentpassword;
    
    this.newpass=this.userform.value.username.slice(0,4);
    this.newpass=this.newpass+'123';
    // if(this.userform.value.newpassword==this.newpass||this.userform.value.newpassword==null){
    //   alert('Your profile is updated')
    // }
    // else{alert('Please enter the correct format to update')}
    if(this.currentpassword==this.checkuser.value.reqd && this.userform.value.newpassword==this.newpass){
    
    this.updatedprofile={
      username:this.userform.value.username,
      newpass:this.userform.value.newpass,
      gender:this.userform.value.gender,
      email:this.userform.value.email,
      contact:this.userform.value.contact,
      firstname:this.userform.value.firstname,
      lastname:this.userform.value.lastname,
      address:this.userform.value.address,
      dob:this.userform.value.dob,
    }
    localStorage.setItem('user',JSON.stringify(this.updatedprofile))
  } 
  else{alert('Enter the correct Current Password')}

  }
  

}

