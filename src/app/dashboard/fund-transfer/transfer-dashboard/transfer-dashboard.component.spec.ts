import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDashboardComponent } from './transfer-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountHolderDetailsComponent } from '../../account-details/account-holder-details/account-holder-details.component';
import { TransferAccountSummaryComponent } from '../transfer-account-summary/transfer-account-summary.component';
import { MoneyTransferComponent } from '../money-transfer/money-transfer.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TransferDashboardComponent', () => {
  let component: TransferDashboardComponent;
  let fixture: ComponentFixture<TransferDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferDashboardComponent,AccountHolderDetailsComponent,TransferAccountSummaryComponent,MoneyTransferComponent],
      imports: [ReactiveFormsModule,HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
