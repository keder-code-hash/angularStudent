import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { TokenService } from '../services/token.service';
import{Router} from "@angular/router";
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  username:any='';
  password:any="";
  token:any="";
  loggedIn:boolean;
  isLoggedInFailed:boolean;
  constructor(public admin:StudentService,public tokenStore:TokenService,private router:Router) { }

  ngOnInit(): void 
  {
    this.tokenStore.getToken()
    {
      this.isLoggedInFailed=false;
    }
  }
  SignIn(username,password)
  {
    let obj={
      "password":password,
      "username":username
    };
    this.admin.adminLogin(obj).subscribe(token=>
      {
        token=token;
        this.tokenStore.saveToken(token.token);
        this.router.navigate(['/admin']);
      },err=>
      {
        this.isLoggedInFailed=true;
        console.log("error:"+err);
      })
    //this.tokenStore.saveToken(data.token);
  }
}
