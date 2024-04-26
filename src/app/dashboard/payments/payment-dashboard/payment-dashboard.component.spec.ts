import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDashboardComponent } from './payment-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountHolderDetailsComponent } from '../../account-details/account-holder-details/account-holder-details.component';
import { SelectBillerComponent } from '../select-biller/select-biller.component';
// import { RegisterService } from '../../../register.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BankingdataService } from '../../../bankingdata.service';

describe('PaymentDashboardComponent', () => {
  let component: PaymentDashboardComponent;
  let fixture: ComponentFixture<PaymentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentDashboardComponent,AccountHolderDetailsComponent,SelectBillerComponent],
      imports: [ReactiveFormsModule,HttpClientModule],
      providers: [BankingdataService]

    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
