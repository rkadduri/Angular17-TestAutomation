import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAccountSummaryComponent } from './transfer-account-summary.component';
import { HttpClientModule } from '@angular/common/http';
import { BankingdataService } from '../../../bankingdata.service';

describe('TransferAccountSummaryComponent', () => {
  let component: TransferAccountSummaryComponent;
  let fixture: ComponentFixture<TransferAccountSummaryComponent>;
  let service : BankingdataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BankingdataService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferAccountSummaryComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(BankingdataService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking whether accountHolderName tag has expected textContent',()=>{
    let accountHolderName = fixture.debugElement.nativeElement.querySelector('#accountHolderName');
    let name = service.trimmedString;
    expect(accountHolderName.textContent).toEqual(name)
  });

  it('checking whether accountType has expected textContent',()=>{
    let accountType = fixture.debugElement.nativeElement.querySelector('#accountType');
    expect(accountType.textContent).toEqual('Savings Account')
  });

  it('checking whether accountNumber has expected textContent',()=>{
    let accountNumber = fixture.debugElement.nativeElement.querySelector('#accountNumber');
    expect(accountNumber.textContent).toEqual('1234567890111213')
  });

  it('checking whether ifscCode has expected textContent',()=>{
   let ifscCode = fixture.debugElement.nativeElement.querySelector('#ifscCode');
   expect(ifscCode.textContent).toEqual('ABCD0001234')
  });

  it('checking whether available balance has expected value',()=>{
    let balance = fixture.debugElement.nativeElement.querySelector('#balance');
    let balanceText = balance.textContent.trim();
    let numericBalance = parseFloat(balanceText.replace(/[^\d.-]/g, ''));
    let balanceValue = service.balance;
    expect(numericBalance).toEqual(balanceValue)
  });

  it('checking whether branch has expected textContent',()=>{
    let branch = fixture.debugElement.nativeElement.querySelector('#branch');
    expect(branch.textContent).toEqual('KPHB')
  });
});
