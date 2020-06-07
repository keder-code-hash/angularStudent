import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import {FormGroup,FormBuilder, FormControl} from '@angular/forms'
@Component({
  selector: 'app-paymentdialog',
  templateUrl: './paymentdialog.component.html',
  styleUrls: ['./paymentdialog.component.css']
})
export class PaymentdialogComponent implements OnInit {

 // myForm:FormGroup;
  myForm= new FormGroup({
    time:new FormControl(''),
    paymentDoc:new FormControl('')
  })
  constructor(public dialogRef:MatDialogRef<PaymentdialogComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any) 
  {
    
  }

  ngOnInit(): void {
  }
  payment(form)
  {
    console.log(this.data.id);
    console.log(form.value)
  }
}
