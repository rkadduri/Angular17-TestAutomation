import { Component } from '@angular/core';
import { BankingdataService } from '../../../bankingdata.service';
import { NgClass, NgStyle } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass,NgStyle,RouterLink],
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
