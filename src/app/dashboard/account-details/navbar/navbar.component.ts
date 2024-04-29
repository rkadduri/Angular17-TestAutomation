import { Component } from '@angular/core';
import { BankingdataService } from '../../../bankingdata.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private service: BankingdataService) {}

  alltabNames = this.service.tabNames;
  UserSelectTab = this.service.userSelectedTab;

  selectTab(name: string) {
    console.log(name);
    this.service.breadCrumb.pop();
    this.service.breadCrumb.push(name);
    this.UserSelectTab = name;
  }


}
