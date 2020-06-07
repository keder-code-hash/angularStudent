import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { SdetailsComponent } from './sdetails/sdetails.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CashierComponent } from './cashier/cashier/cashier.component';
import { ViewComponent } from './view/view.component';
import { SloginComponent } from './slogin/slogin.component';
import { Studentdetail } from './studendetail';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';
import { AdminsdetailsComponent } from './adminsdetails/adminsdetails.component';
import {PayrequestComponent} from './payrequest/payrequest.component';
const routes:Routes=[
  {path:'',redirectTo:'view',pathMatch:'full'},
  {path:'view',component:ViewComponent},
  {path:'student',component:SdetailsComponent},
  {path:'admin',component:AdminComponent},
  {path:'cashier',component:CashierComponent},
  {path:'slogin',component:SloginComponent},
  {path:'myprofile',component:StudentdetailsComponent},
  {path:'payment',component:PaymentdetailsComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'paymentDetails',component:AdminpaymentComponent},
  {path:"studentDetails",component:AdminsdetailsComponent},
  {path:"paymentRequest",component:PayrequestComponent},
  {path:'**',redirectTo:'view'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
