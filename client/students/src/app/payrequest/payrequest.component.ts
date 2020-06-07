import { Component, OnInit,ViewChild } from '@angular/core';
import { StudentService } from '../services/student.service';
import { TokenService } from '../services/token.service';
import {MatDialog}from '@angular/material/dialog'
import { StudentbyIdComponent } from '../studentby-id/studentby-id.component';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-payrequest',
  templateUrl: './payrequest.component.html',
  styleUrls: ['./payrequest.component.css']
})
export class PayrequestComponent implements OnInit {
  paymentArray:any=[];
  studentArray:any=[];
  displayedColumns:any=["name","studentid","action"]
  @ViewChild('studentForm', { static: false })studentForm: NgForm;
  name:any;
  constructor(public pay:StudentService,public token:TokenService,public dialog:MatDialog) { }

  ngOnInit(): void 
  {
    this.getPayments();
  }
  getPayments()
  {
    this.pay.getAllStudents().subscribe(data=>
      {
        this.studentArray=data;
        console.log(data);
      },err=>
      {
        console.log(err);
      })
  }
  makePayment(id:any,name:any)
  {
    const dialogRef=this.dialog.open(StudentbyIdComponent,{data:
    {id:id,name:name}});
  }
  addRequest()
  {

  }
}
