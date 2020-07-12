import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-cashierpaymentrecord',
  templateUrl: './cashierpaymentrecord.component.html',
  styleUrls: ['./cashierpaymentrecord.component.css']
})
export class CashierpaymentrecordComponent implements OnInit {
  paymentArray:any=[];
  displayedColumns=["paymentid","transid","studentid","createdAt"]
  constructor(public cash:StudentService,public tokenStorage:TokenService) { }

  ngOnInit(): void
   {
     this.getHistory();
  }
getHistory()
{
  if(this.tokenStorage.getToken())
  {this.cash.getcashier().subscribe(data=>
    {
      this.paymentArray=data;
      console.log("success");
    },err=>
    {
      console.log(err);
    })}
}
}
