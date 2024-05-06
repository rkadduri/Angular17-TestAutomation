import { DatePipe } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-statement',
  standalone: true,
  imports: [FormsModule, DatePipe, RouterLink],
  templateUrl: './account-statement.component.html',
  styleUrl: './account-statement.component.css'
})
export class AccountStatementComponent {
  fromStatementDate = '';
  toStatementDate = '';
  showflag = '';
  todayDate = new Date();

  constructor(private render: Renderer2) { }

  ngOnInit() {
    this.addOrRemoveClassOnViewport();
    window.addEventListener('resize', () => {
      this.addOrRemoveClassOnViewport();
    })
  }

  addOrRemoveClassOnViewport() {
    const periodcontainer = document.getElementById('periodBox');
    const typecontainer = document.getElementById('downloadBox');
    if (!periodcontainer) {
      return;
    }

    if (!typecontainer) {
      return;
    }

    const screenWidth = window.innerWidth;
    const isLargeScreen = screenWidth >= 992;

    if (isLargeScreen) {
      this.render.addClass(periodcontainer, 'sendToside');
      this.render.addClass(typecontainer, 'sendToside');
      // console.log("Large screen");
    } else {
      this.render.removeClass(periodcontainer, 'sendToside');
      this.render.removeClass(typecontainer, 'sendToside');
      // console.log("small Screen");
    }
  }

  statementPeriod = ['Last 7 Days', 'Last 14 Days'];
  selectStatementPeriod = this.statementPeriod[0];

  statementFormats = ['PDF File', 'Excel Sheet'];
  selectedStatementFormat = this.statementFormats[0];

  showWithDate() {
    this.showflag = 'Show With Date';
    console.log(this.showflag);
  }

  showWithPeriod() {
    this.showflag = 'Show With Period';
    console.log(this.showflag);
  }

  onSelectStatementPeriod(selectedValue: any) {
    this.selectStatementPeriod = selectedValue.target.value;
  }

  onSelectStatementFormat(selectedValue: any) {
    this.selectedStatementFormat = selectedValue.target.value;
  }

  submitStatement() {
    console.log("while submitting",this.showflag);
    if (
      (this.showflag === 'Show With Date' &&
        this.fromStatementDate !== '' &&
        this.toStatementDate !== '' &&
        this.selectedStatementFormat !== '') ||
      (this.showflag === 'Show With Period' &&
        this.selectedStatementFormat !== '')
    ) {
      let message = '';
      if (this.showflag === 'Show With Date') {
        message = `Downloaded Statement from ${this.fromStatementDate} to ${this.toStatementDate} in ${this.selectedStatementFormat} Format`;
      } else if(this.showflag==='Show With Period') {
        message = `Downloaded Statement of ${this.selectStatementPeriod} in ${this.selectedStatementFormat} Format`;
      }
      alert(message);
    } else {
      alert('Choose Option and Select The Fields To Download');
    }
  }

  cancelStatement() {
    this.selectedStatementFormat = '';
    this.fromStatementDate = '';
    this.toStatementDate = '';
    this.showflag='';
  }
}
