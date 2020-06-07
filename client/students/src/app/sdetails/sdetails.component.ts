import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service';
import {Studentdetail} from '../studendetail';
import { TokenService } from '../services/token.service';
@Component({
  selector: 'app-sdetails',
  templateUrl: './sdetails.component.html',
  styleUrls: ['./sdetails.component.css']
})
export class SdetailsComponent implements OnInit {
  studentloggedIn:boolean=false;
  students:Studentdetail[];
  constructor(private studentService:StudentService,private tokenstorage:TokenService) { }

  ngOnInit(): void 
  {
    if(this.tokenstorage.getToken())
    {
      this.studentloggedIn=true;
    }
    else{
      this.studentloggedIn=false;
    }
    //this.logOut();
  }
  logOut(){
    this.tokenstorage.signOut();
    window.location.reload();
  }
}

