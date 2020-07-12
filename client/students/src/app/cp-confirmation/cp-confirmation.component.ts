import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-cp-confirmation',
  templateUrl: './cp-confirmation.component.html',
  styleUrls: ['./cp-confirmation.component.css']
})
export class CpConfirmationComponent implements OnInit {
  paymentArray:any=[]
  constructor(public cash:StudentService,public tokenStorage:TokenService) { }
  displayedColumns:any=["paymentid","transid","studentid","studentname","status","paymentamount","time","createdAt","event","action"];
  ngOnInit(): void 
  {
    this.getPay();
  }

  getPay()
  {
    this.cash.conPayment().subscribe(data=>
      {
        this.paymentArray=data;
      },err=>
      {
        console.log(err);
      })
  }
  confirmPay(paymentid,transid,studentid,studentname)
  {
    var obj={
      "paymentid":paymentid,
      "transid":transid,
      "status":"complete"
    }
    var cashier={
      "paymentid":paymentid,
      "transid":transid,
      "cashierid":this.tokenStorage.getToken(),
      "studentid":studentid,
      "studentname":studentname
    }
    this.cash.updatePayments(obj).subscribe(data=>
      {
        console.log("Success");
      },err=>
      {
        console.log(err);
      })
    this.cash.cashierHistory(cashier).subscribe(data=>
      {
        console.log("success")
      },err=>
      {
        console.log("ERROR:"+err)
      })  
    window.location.reload();
  }
}
