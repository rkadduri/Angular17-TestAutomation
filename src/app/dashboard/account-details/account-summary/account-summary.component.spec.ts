import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSummaryComponent } from './account-summary.component';
import { BankingdataService } from '../../../bankingdata.service';

describe('AccountSummaryComponent', () => {
  let component: AccountSummaryComponent;
  let fixture: ComponentFixture<AccountSummaryComponent>;
  let myservice:BankingdataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSummaryComponent],
      providers:[BankingdataService],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountSummaryComponent);
    component = fixture.componentInstance;
    myservice = TestBed.inject(BankingdataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Inititalizing Summary Details',()=>{
    expect(component.accountBalance).toBeDefined();
    expect(component.accountUserName).toBeDefined();
    expect(component.accountSummary).toBeDefined();
    expect(component.isDisplay).toBeDefined();
  });

  it('Setting the Summary Data',()=>{
    myservice.balance = 50000; // Mocked balance
    myservice.accountData = [{
      AccountHolder:myservice.trimmedString,
        AccountType:"Savings Account",
        AccountNumber:"1234567890111213",
        AccountIFSCCode:"ABCD0001234",
        AccountBranch:"KPHB",
        AvailableBalanceinRupees: myservice.balance
    }];
    myservice.trimmedString = 'Leela';
    spyOn(console, 'log');
    fixture.detectChanges();
    // Trigger ngOnInit
    component.ngOnInit();

    // Assert that component properties are initialized with service data
    expect(component.accountBalance).toEqual(myservice.balance);
    expect(component.accountSummary).toEqual(myservice.accountData);
    expect(component.accountUserName).toEqual(myservice.trimmedString);
  });

});
