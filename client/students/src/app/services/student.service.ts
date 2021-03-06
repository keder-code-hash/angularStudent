import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';
import { Observable } from 'rxjs';
import {Studentdetail, payment} from '../studendetail';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

const httpOption={
  headers: new HttpHeaders({'content-Type':'application/json'})
};
export interface student
{
  authid:string;
  authpass:string;
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private token:string;
  payment:payment[]=[];
  studentUrl="http://localhost:8080/studentdetails";
  loginUrl="http://localhost:8080/api/auth/signin";
  paymentUrl="http://localhost:8080/studentpayment";
  adminloginUrl="http://localhost:8080/adminLogin";
  allstudentsUrl="http://localhost:8080/allStudents";
  allpaymentsUrl="http://localhost:8080/allPayments";
  updatePaymentsUrl="http://localhost:8080/updatePayment";
  insertPaymentUrl="http://localhost:8080/insertpayment";
  cashierloginUrl="http://localhost:8080/cashierlogin";
  conpayUrl="http://localhost:8080/cashierPay";
  cashierHistUrl="http://localhost:8080/cashierHist";
  cashierUrl="http://localhost:8080/getcashier";
  makeStudentpaymentUrl="http://localhost:8080/makeStudentPayment";
  constructor(private http:HttpClient,private router:Router,private tokenstorage:TokenService)
  {

  }
  
  logindata(data):Observable<any>
  {
    return this.http.post<any>(this.loginUrl,data,httpOption);
  }
  getstudentprofile():Observable<any>
  {
    return this.http.get<any>(this.studentUrl,{headers:new HttpHeaders({"x-access-token":this.tokenstorage.getToken()})});
  }
  getpaymentdetails():Observable<any>
  {
    return this.http.get<any>(this.paymentUrl,{headers:new HttpHeaders({"x-access-token":this.tokenstorage.getToken()})});
  }
  adminLogin(data):Observable<any>
  {
    return this.http.post<any>(this.adminloginUrl,data,httpOption);
  }
  getAllStudents():Observable<any>
  {
    return this.http.get<any>(this.allstudentsUrl);
  }
  getallPayments():Observable<any>
  {
    return this.http.get<any>(this.allpaymentsUrl);
  }
  updatePayments(data):Observable<any>
  {
    return this.http.put<any>(this.updatePaymentsUrl,data)
  }
  paymentCreate(data):Observable<any>
  {
    return this.http.put<any>(this.insertPaymentUrl,data);
  }
  cashierlogin(data):Observable<any>
  {
    return this.http.post<any>(this.cashierloginUrl,data,httpOption);
  }
  conPayment():Observable<any>
  {
    return this.http.get<any>(this.conpayUrl);
  }
  cashierHistory(data):Observable<any>
  {
    return this.http.put<any>(this.cashierHistUrl,data);
  }
  getcashier():Observable<any>
  {
    return this.http.get<any>(this.cashierUrl);
  }
  makeStudentpayment(data):Observable<any>
  {
    return this.http.put(this.updatePaymentsUrl,data);
  }
}
