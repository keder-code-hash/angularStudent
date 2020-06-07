import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import{NgForm} from '@angular/forms';
import { payment } from '../studendetail';
import {MatDialog} from '@angular/material/dialog';
import {ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import{PaymentdialogComponent} from '../paymentdialog/paymentdialog.component';
@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit {
  paymentArray:any=[];
  @ViewChild('studentForm', { static: false })studentForm: NgForm;
  name:any;
  constructor(private payment:StudentService,public dialog:MatDialog) { }
  displayedColumns:any=["paymentid","status","paymentamount","time","createdAt","event","action"];
  ngOnInit(): void 
  {
    this.getpayment();
  }
  getpayment()
  {
    this.payment.getpaymentdetails().subscribe(data=>
      {
        this.paymentArray=data;
        console.log(data)
        console.log(this.paymentArray);
      },err=>
      {
        console.log(err)
      })
  }
  makePayment(id:any)
  {
    console.log(id);
    const dialogRef=this.dialog.open(PaymentdialogComponent,{
      data:{id:id}
    });
  }
  onSubmit()
  {}
}
