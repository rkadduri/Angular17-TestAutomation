import { Component } from '@angular/core';
import { AccountHolderDetailsComponent } from "../../account-details/account-holder-details/account-holder-details.component";
import { TransferAccountSummaryComponent } from "../transfer-account-summary/transfer-account-summary.component";
import { MoneyTransferComponent } from "../money-transfer/money-transfer.component";
import { BankingdataService } from '../../../bankingdata.service';

@Component({
    selector: 'app-transfer-dashboard',
    standalone: true,
    templateUrl: './transfer-dashboard.component.html',
    styleUrl: './transfer-dashboard.component.css',
    imports: [AccountHolderDetailsComponent, TransferAccountSummaryComponent, MoneyTransferComponent]
})
export class TransferDashboardComponent {
  constructor(private service:BankingdataService){}

  ngOnInit(){
    console.log(this.service.userSelectedTab);
  }

}
