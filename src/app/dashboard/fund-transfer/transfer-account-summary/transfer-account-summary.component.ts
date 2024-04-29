import { Component } from '@angular/core';
import { BankingdataService } from '../../../bankingdata.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-transfer-account-summary',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './transfer-account-summary.component.html',
  styleUrl: './transfer-account-summary.component.css'
})
export class TransferAccountSummaryComponent {
  accbalance:number=0;
  accountHolder:string = ''
  constructor(private service:BankingdataService){}
  ngOnInit(){
    this.accountHolder = this.service.trimmedString
    this.accbalance =  this.service.balance;
    
  }
}
