import { Component } from '@angular/core';
import { BankingdataService } from '../../../bankingdata.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-account-holder-details',
  standalone: true,
  imports: [DatePipe,CommonModule],
  templateUrl: './account-holder-details.component.html',
  styleUrl: './account-holder-details.component.css'
})
export class AccountHolderDetailsComponent {

  constructor(private service: BankingdataService) {}
  userName: string = '';
  breadCrumbPath: any[] = [];
  accountDetails: any;
  currentDate = new Date();
  accountNo = 1234567890;

  ngOnInit() {
    this.accountDetails = this.service.accountData;
    this.userName = this.service.trimmedString;
    this.breadCrumbPath = this.service.breadCrumb;
  }

}
