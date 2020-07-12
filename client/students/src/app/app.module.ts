import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule,NgModel } from '@angular/forms';
import { HttpClientModule,HttpClient}    from '@angular/common/http';
import { AppComponent } from './app.component';
import { SdetailsComponent } from './sdetails/sdetails.component';
import { CashierComponent } from './cashier/cashier/cashier.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewComponent } from './view/view.component';
import { SloginComponent } from './slogin/slogin.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { MatTableModule, MatTable } from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormField} from "@angular/material/form-field";
import { PaymentdialogComponent } from './paymentdialog/paymentdialog.component';
import {MatDialog} from '@angular/material/dialog';
import{MatDatepickerModule}from '@angular/material/datepicker';
import { 
  OwlDateTimeModule, 
  OwlNativeDateTimeModule,
} from 'ng-pick-datetime';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsdetailsComponent } from './adminsdetails/adminsdetails.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';
//import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { PayrequestComponent } from './payrequest/payrequest.component';
import { StudentbyIdComponent } from './studentby-id/studentby-id.component';
import { CashierpaymentrecordComponent } from './cashierpaymentrecord/cashierpaymentrecord.component';
import { CashierloginComponent } from './cashierlogin/cashierlogin.component';
import { CpConfirmationComponent } from './cp-confirmation/cp-confirmation.component';
import { IssuerequestComponent } from './issuerequest/issuerequest.component';
import {MatSelectModule,MatFormFieldModule,MatInputModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    SdetailsComponent,
    CashierComponent,
    AdminComponent,
    ViewComponent,
    SloginComponent,
    StudentdetailsComponent,
    PaymentdetailsComponent,
    PaymentdialogComponent,
    AdminloginComponent,
    AdminsdetailsComponent,
    AdminpaymentComponent,
    PayrequestComponent,
    StudentbyIdComponent,
    CashierpaymentrecordComponent,
    CashierloginComponent,
    CpConfirmationComponent,
    IssuerequestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatDialogModule,
    MatDatepickerModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    // MatSelectModule,
    // MatFormFieldModule,
    // MatInputModule
  ],
  entryComponents: [
    PaymentdialogComponent
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
