import { Component } from '@angular/core';
import { BankingdataService } from '../../../bankingdata.service';

@Component({
  selector: 'app-tabviews',
  standalone: true,
  imports: [],
  templateUrl: './tabviews.component.html',
  styleUrl: './tabviews.component.css'
})
export class TabviewsComponent {

  constructor(private reg:BankingdataService){}
  activeTab: number = 1;

  ngOnInit(){
    if(this.reg.isTransactionHistory){
      this.activeTab=2;
      this.reg.isTransactionHistory=false;
    }else if(this.reg.isAccountStatement){
      this.activeTab=3;
      this.reg.isAccountStatement=false;
    }
  }

  activateTab(tabNo: number) {
    this.activeTab = tabNo;
  }

}
