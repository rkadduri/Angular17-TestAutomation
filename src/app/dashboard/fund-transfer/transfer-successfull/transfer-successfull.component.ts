import { Component } from '@angular/core';
import { BankingdataService } from '../../../bankingdata.service';
import { NavbarComponent } from '../../account-details/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transfer-successfull',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,RouterLink,CommonModule],
  templateUrl: './transfer-successfull.component.html',
  styleUrl: './transfer-successfull.component.css'
})
export class TransferSuccessfullComponent {

  constructor(private service:BankingdataService){}
  paymentData:any;
  ngOnInit(){
    this.paymentData = this.service.paymentSucess;
    console.log(this.paymentData)
  }
}
