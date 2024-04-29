import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BankingdataService } from '../../../bankingdata.service';

@Component({
  selector: 'app-account-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-summary.component.html',
  styleUrl: './account-summary.component.css'
})
export class AccountSummaryComponent {
  constructor(private service:BankingdataService){}

  isDisplay:boolean = false;
  accountSummary:any;
  accountUserName:any;
  accountBalance:any;
  

  ngOnInit(){
    this.accountBalance = this.service.balance
    this.accountSummary = this.service.accountData
    this.accountUserName = this.service.trimmedString
    console.log(this.accountSummary);
  }


}
