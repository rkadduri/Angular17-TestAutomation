import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BankingdataService } from '../../../../../bankingdata.service';
import { recent } from '../../../../../modal';

@Component({
  selector: 'app-recent-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-transaction.component.html',
  styleUrl: './recent-transaction.component.css'
})
export class RecentTransactionComponent {
  constructor(private serv:BankingdataService){}
  RecentTrans!:recent[];

  ngOnInit(){
    this.serv.getData().subscribe((data:any)=>{
      if(data['RecentTrans'].length!=0){
        console.log(data['RecentTrans']);
        this.RecentTrans=data['RecentTrans'];
      }
    });
  }
} 