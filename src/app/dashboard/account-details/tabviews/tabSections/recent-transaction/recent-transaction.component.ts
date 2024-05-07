import { Component, Renderer2 } from '@angular/core';
import { BankingdataService } from '../../../../../bankingdata.service';
import { recent } from '../../../../../modal';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-recent-transaction',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './recent-transaction.component.html',
  styleUrl: './recent-transaction.component.css'
})
export class RecentTransactionComponent {
  constructor(private serv:BankingdataService,private render:Renderer2){}
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
