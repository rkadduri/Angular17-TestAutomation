import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountDashboardComponent } from './dashboard/account-details/account-dashboard/account-dashboard.component';
import { NavbarComponent } from './dashboard/account-details/navbar/navbar.component';
import { MoneyTransferComponent } from './dashboard/fund-transfer/money-transfer/money-transfer.component';
import { AddpayeeComponent } from './dashboard/fund-transfer/addpayee/addpayee.component';
import { PaymentSuccessfullComponent } from './dashboard/fund-transfer/payment-successfull/payment-successfull.component';
import { TransferAccountSummaryComponent } from './dashboard/fund-transfer/transfer-account-summary/transfer-account-summary.component';
import { TransferDashboardComponent } from './dashboard/fund-transfer/transfer-dashboard/transfer-dashboard.component';
import { FundTransferComponent } from './dashboard/fund-transfer/fund-transfer.component';
import { AccountSummaryComponent } from './dashboard/account-details/account-summary/account-summary.component';
import { MultipleAccountsComponent } from './dashboard/account-details/multiple-accounts/multiple-accounts.component';
import { AccountStatementComponent } from './dashboard/account-details/tabviews/tabSections/account-statement/account-statement.component';
import { RecentTransactionComponent } from './dashboard/account-details/tabviews/tabSections/recent-transaction/recent-transaction.component';
import { TransactionHistoryComponent } from './dashboard/account-details/tabviews/tabSections/transaction-history/transaction-history.component';
import { LoginComponent } from './userdata/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular17-TestAutomation';
}
