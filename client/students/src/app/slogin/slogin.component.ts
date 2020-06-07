import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormsModule,FormBuilder,FormGroup,FormControl, Validators} from '@angular/forms';
import {  StudentService, student } from '../services/student.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { TokenService } from '../services/token.service';
@Component({
  selector: 'app-slogin',
  templateUrl: './slogin.component.html',
  styleUrls: ['./slogin.component.css']
})
export class SloginComponent implements OnInit {
userid:any;
isLoggedin=false;
isloggedInFailed=false;
//obj={}
student:student[];
password:any;
myForm:FormGroup;
  constructor(public fb:FormBuilder,private auth:StudentService,private router:Router,private tokenstorage:TokenService) {
    this.myForm=fb.group({
      userid:['',Validators.required],
      password:['',Validators.required]
    })
   }
login(form)
{
  let obj={
    username:"asdf",
    password:"12qwe34e3edefwfq"
  }
  this.auth.logindata(obj).subscribe(data=>
    {
      this.tokenstorage.saveToken(data.token);
      this.isLoggedin=true;
      this.isloggedInFailed=false;
      //this.reloadpage()
      this.router.navigate(["/student"]);
    },err=>
    {
      console.log(err);
      this.isloggedInFailed=true;
    })
}


  ngOnInit(): void 
  {
    if(this.tokenstorage.getToken())
    {
      this.isLoggedin=true;
    }
  }
  reloadpage()
  {
    window.location.reload();
  }
}
