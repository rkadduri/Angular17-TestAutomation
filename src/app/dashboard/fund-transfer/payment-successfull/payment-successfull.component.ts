import { Component } from '@angular/core';
import { NavbarComponent } from '../../account-details/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BankingdataService } from '../../../bankingdata.service';

@Component({
  selector: 'app-payment-successfull',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './payment-successfull.component.html',
  styleUrl: './payment-successfull.component.css'
})
export class PaymentSuccessfullComponent {
  constructor(private service:BankingdataService){}
  paymentData:any;
  ngOnInit(){
    this.paymentData = this.service.paymentSucess;
    console.log(this.paymentData)
  }
}
