import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBillerComponent } from './select-biller.component';
import { HttpClientModule } from '@angular/common/http';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
// import { RegisterService } from '../../../register.service';
import { DebugElement } from '@angular/core';
import { BankingdataService } from '../../../bankingdata.service';

describe('SelectBillerComponent', () => {
  let component: SelectBillerComponent;
  let fixture: ComponentFixture<SelectBillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectBillerComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [BankingdataService]

    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectBillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it shows the empty value', () => {
   expect(component.form.value).toEqual({billerType:'Credit Card', billerdetails:'Credit Card', billDetailsAmount:'', PayingFrom:'Savings Account'})
   expect(component.form.invalid).toBeTruthy();
   expect(component.form.untouched).toBeTruthy();
  });
  it('should have required form controls', () => {
    let networkProvider = component.rechargeForm.controls['networkProvider']
    networkProvider.markAsTouched();
    expect(networkProvider.errors?.['required']).toBeFalsy();
    expect(component.rechargeForm.contains('networkProvider')).toBeTruthy();
    expect(component.rechargeForm.contains('mobileNumber')).toBeTruthy();
    expect(component.rechargeForm.contains('amount')).toBeTruthy();
  });
  it('should validate mobile number field', () => {
    let mobileNumber = component.rechargeForm.controls['mobileNumber'];
    mobileNumber.setValue('jyosth');
    expect(mobileNumber.errors?.['pattern']).toBeTruthy()
    mobileNumber.markAsTouched();
    expect(mobileNumber.errors?.['required']).toBeFalsy();
    mobileNumber.setValue('123');
    expect(mobileNumber.errors?.['minlength']).toBeTruthy()
    expect(mobileNumber.valid).toBeFalsy();
    mobileNumber.setValue('1234567890'); // Valid mobile number
    expect(mobileNumber.valid).toBeTruthy();
  });
  it('should validate amount field', () => {
    let amount = component.rechargeForm.controls['amount'];
    amount.setValue('sdfgh');
    expect(amount.errors?.['pattern']).toBeTruthy();
    amount.markAsTouched();
    expect(amount.errors?.['required']).toBeFalsy();
    expect(amount.valid).toBeFalsy();
    amount.setValue(''); // Empty amount
    expect(amount.hasError('required')).toBeTruthy();

    // amount.setValue('123456'); // Invalid amount length
    // expect(amount.valid).toBeFalsy();

    amount.setValue('100'); // Valid amount
    expect(amount.valid).toBeTruthy();
  });
  it(' default value of Network Providers',() => {
    fixture.detectChanges()
    expect(component.rechargeForm.value.networkProvider).toEqual('Airtel Post-paid')
  });

  it('savings account tag length',() =>{
    let savings = fixture.debugElement.nativeElement.querySelectorAll("#savings");
    // console.log(savings);
    expect(savings.length).toEqual(1)
  })
  it('biller length',() =>{
    fixture.detectChanges();
    let biller = fixture.debugElement.nativeElement.querySelectorAll('#biller');
    // console.log(biller);
    expect(biller.length).toEqual(4)
  });

  it('billerDetails length',() =>{
    let billerDetails = fixture.debugElement.nativeElement.querySelectorAll("#billerDetails");
    // console.log(billerDetails);
    expect(billerDetails.length).toEqual(2)
  })

  
});
