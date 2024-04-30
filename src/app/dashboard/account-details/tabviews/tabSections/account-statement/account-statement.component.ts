import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-statement',
  standalone: true,
  imports: [FormsModule,DatePipe,RouterLink],
  templateUrl: './account-statement.component.html',
  styleUrl: './account-statement.component.css'
})
export class AccountStatementComponent {
  fromStatementDate = '';
  toStatementDate = '';
  showflag = '';
  todayDate = new Date();

  statementPeriod = ['Last 7 Days', 'Last 14 Days'];
  selectStatementPeriod = this.statementPeriod[0];

  statementFormats = ['PDF File', 'Excel Sheet'];
  selectedStatementFormat = this.statementFormats[0];

  showWithDate() {
    this.showflag = 'Show With Date';
  }

  showWithPeriod() {
    this.showflag = 'Show With Period';
  }

  onSelectStatementPeriod(selectedValue: any) {
    this.selectStatementPeriod = selectedValue.target.value;
  }

  onSelectStatementFormat(selectedValue: any) {
    this.selectedStatementFormat = selectedValue.target.value;
  }

  submitStatement() {
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
      } else {
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
  }
}
