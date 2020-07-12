import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators} from "@angular/forms";
@Component({
  selector: 'app-issuerequest',
  templateUrl: './issuerequest.component.html',
  styleUrls: ['./issuerequest.component.css']
})
export class IssuerequestComponent implements OnInit {
  myForm:FormGroup;
  public items:Array<{field:String}>=[
    {field:"SemesterFees"},
    {field:"AnnualFees"},
    {field:"Fine"}
  ]
  constructor(public fb:FormBuilder) {
    this.myForm=fb.group({
      issue:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
Save(Form)
{
  console.log(Form.value.issue);
}
}
