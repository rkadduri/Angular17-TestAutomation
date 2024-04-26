import { Routes } from '@angular/router';
import { LoginComponent } from './userdata/login/login.component';
import { RegistrationComponent } from './userdata/registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountDashboardComponent } from './dashboard/account-details/account-dashboard/account-dashboard.component';
import { AddpayeeComponent } from './dashboard/fund-transfer/addpayee/addpayee.component';
import { PaymentSuccessfullComponent } from './dashboard/fund-transfer/payment-successfull/payment-successfull.component';
import { TransferDashboardComponent } from './dashboard/fund-transfer/transfer-dashboard/transfer-dashboard.component';
import { PaymentDashboardComponent } from './dashboard/payments/payment-dashboard/payment-dashboard.component';
import { PaymentSuccessComponent } from './dashboard/payments/payment-success/payment-success.component';
import { ForgotInfoComponent } from './userdata/forgot-info/forgot-info.component';

export const routes: Routes = [
    {path: '', component:LoginComponent},
    {path:"login", component:LoginComponent},
    {path:"forgot-info", component:ForgotInfoComponent},
    {path:"registration", component:RegistrationComponent},
    {path:"dashboard", component:DashboardComponent},
    {path: "forgot-info", component: ForgotInfoComponent },
    {path:"accountDashboard",component:AccountDashboardComponent},
    {path:"paymentDashboard",component:PaymentDashboardComponent},
    {path:'transferDashboard',component:TransferDashboardComponent},
    {path:'addpayee',component:AddpayeeComponent},
    {path:'paymentsuccess',component:PaymentSuccessfullComponent},
    {path:'payment',component:PaymentSuccessComponent}
];
