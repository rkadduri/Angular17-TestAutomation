import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../account-details/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BankingdataService } from '../../../bankingdata.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterLink],
  providers:[BankingdataService],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.css'
})
export class PaymentSuccessComponent{

  selectBillerPayment:any;
  mobileRechargePayment:any
 
  constructor(private service:BankingdataService){}
  recharge:boolean = this.service.rechargePaymentSuccess

  
  ngOnInit(){
    console.log(this.service.selectBillerSuccess)
    this.selectBillerPayment =  this.service.selectBillerSuccess;
    this.mobileRechargePayment = this.service.selectBillerSuccess
    console.log(this.selectBillerPayment)
    console.log(this.mobileRechargePayment)
  }

  

}
