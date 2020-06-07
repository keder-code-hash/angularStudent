import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-adminpayment',
  templateUrl: './adminpayment.component.html',
  styleUrls: ['./adminpayment.component.css']
})
export class AdminpaymentComponent implements OnInit {
  paymentsArray:any=[];
  displayedColumns:any=["studentname","studentid","paymentid","status","paymentamount","time","createdAt","event"];
  constructor(private admin:StudentService) { }

  ngOnInit(): void 
  {
    this.getAllPayments();
  }
  getAllPayments()
  {
    this.admin.getallPayments().subscribe(data=>
      {
        this.paymentsArray=data;
        console.log(this.paymentsArray)
      },err=>
      {
        console.log(err);
      })
  }
}
