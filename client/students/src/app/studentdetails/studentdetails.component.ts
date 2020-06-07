import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { StudentService } from '../services/student.service';
import {Studentdetail} from '../studendetail';
@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  user:Studentdetail;
  constructor(private tokenstorage:TokenService,private student:StudentService) { }



  ngOnInit(): void 
  {
    this.student.getstudentprofile().subscribe(data=>
      {
        this.user=data;
      },err=>
      {
        console.log(err);
      })
  }

}
