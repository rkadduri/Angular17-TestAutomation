import { Component, ElementRef, Renderer2 } from '@angular/core';
import { BankingdataService } from '../../../bankingdata.service';
import { NgClass, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass,NgStyle,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private service: BankingdataService,private render:Renderer2,private elementRef:ElementRef) {}

  alltabNames = this.service.tabNames;
  UserSelectTab = this.service.userSelectedTab;

  selectTab(name: string) {
    console.log(name);
    this.service.breadCrumb.pop();
    this.service.breadCrumb.push(name);
    this.UserSelectTab = name;
  }

  ngOnInit(){
    this.addOrRemoveClassOnViewport();
   
  }

  addOrRemoveClassOnViewport(){
    const accountnavitem = document.getElementById('accountNavitem');
    console.log(accountnavitem);
  
    const paymentnavitem = document.getElementById('paymentNavitem');
    console.log(paymentnavitem);

    const transfernavitem = document.getElementById('transferNavitem');
    console.log(transfernavitem)

    const screenWidth = window.innerWidth;
    const isLargeScreen = screenWidth<=992;

    if(isLargeScreen){
      this.render.addClass(accountnavitem,'navColor');
      this.render.addClass(paymentnavitem,'navColor');
      this.render.addClass(transfernavitem,'navColor');
     
      // console.log("Large screen");
    }else{
      this.render.removeClass(accountnavitem,'navColor');
      this.render.removeClass(paymentnavitem,'navColor');
      this.render.removeClass(transfernavitem,'navColor');
      // console.log("small Screen");
    }
  }

}
