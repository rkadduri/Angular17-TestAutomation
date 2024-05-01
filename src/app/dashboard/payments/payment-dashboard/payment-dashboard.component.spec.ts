import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDashboardComponent } from './payment-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountHolderDetailsComponent } from '../../account-details/account-holder-details/account-holder-details.component';
import { SelectBillerComponent } from '../select-biller/select-biller.component';
// import { RegisterService } from '../../../register.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BankingdataService } from '../../../bankingdata.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('PaymentDashboardComponent', () => {
  let component: PaymentDashboardComponent;
  let fixture: ComponentFixture<PaymentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,HttpClientModule],
      providers: [
        BankingdataService,
         {
           provide: ActivatedRoute,
           useValue: {
             paramMap: of({}) 
           }
         }
       ]

    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
