import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from "@angular/material/dialog";
import {FormBuilder,FormGroup, Validators} from "@angular/forms";
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-studentby-id',
  templateUrl: './studentby-id.component.html',
  styleUrls: ['./studentby-id.component.css']
})
export class StudentbyIdComponent implements OnInit {
  myForm:FormGroup
  constructor(public dialogRef:MatDialogRef<StudentbyIdComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any,public fb:FormBuilder,public payment:StudentService) {
      this.myForm=fb.group({
        Issue:['',[Validators.required]],
        PaymentId:['',[Validators.required]],
        amount:['',[Validators.required]]
      })
     }

  
  ngOnInit(): void {
  }
  sendRequest(form)
  {
    var obj={
      "id":this.data.id,
      "name":this.data.name,
      "amount":form.value.amount,
      "status":"pending",
      "paymentid":form.value.PaymentId,
      "issue":form.value.Issue,
      "utime":"",
      "time":""
    }
    this.payment.paymentCreate(obj).subscribe(data=>
      {
        console.log("successfully Updated");
      },err=>
      {
        console.log("error:"+err);
      })
    console.log(form.value.amount)
  }
}
