import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-adminsdetails',
  templateUrl: './adminsdetails.component.html',
  styleUrls: ['./adminsdetails.component.css']
})
export class AdminsdetailsComponent implements OnInit {
  studentsArray:any=[];
  displayedColumns:any=["studentid","name","email","batch","subject","class","phNo"];
  constructor(private tokenStorage:TokenService,private admin:StudentService) 
  {
    this.getStudents();
  }
  getStudents()
  {
    this.admin.getAllStudents().subscribe(data=>
      {
        this.studentsArray=data;
        console.log(this.studentsArray);
      },err=>
      {
        console.log(err);
      })
  }
  ngOnInit(): void
   {

  }

}
