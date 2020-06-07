import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { TokenService } from '../services/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cashierlogin',
  templateUrl: './cashierlogin.component.html',
  styleUrls: ['./cashierlogin.component.css']
})
export class CashierloginComponent implements OnInit {
  myForm:FormGroup;
  token:any;
  loginValid:boolean=true;
  constructor(private cashier:StudentService,private tokenStorage:TokenService,public fb:FormBuilder,public router:Router) 
  { 
    this.myForm=fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  ngOnInit(): void 
  {
  }
  Signin(form)
  {
    var obj={
      "username":form.value.username,
      "password":form.value.password
    }
    this.cashier.cashierlogin(obj).subscribe(data=>
    {
     this.token=data;
     this.tokenStorage.saveToken(this.token.token);
     this.router.navigate(['/cashier']);
    },err=>
    {
      console.log("error:"+err);
    })
    
  }
}
