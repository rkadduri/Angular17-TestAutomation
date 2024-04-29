import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTransferComponent } from './money-transfer.component';

describe('MoneyTransferComponent', () => {
  let component: MoneyTransferComponent;
  let fixture: ComponentFixture<MoneyTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyTransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoneyTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //initial invalid form 
  it('should initialize form with empty values and is invalid', () => {
    expect(component.moneyTransferForm.value).toEqual({ payee: 'Select Payee', accountNumber: '', reEnterAccountNo: '', amount: '', remarks: '', paymentModeInput: ''});
    expect(component.moneyTransferForm.invalid).toBeTruthy();
    expect(component.moneyTransferForm.untouched).toBeTruthy()
  });

  //accountNo input field
  it('Setting a static value for accNo input field test case',()=>{
    let accNo = component.moneyTransferForm.controls['accountNumber'];
    accNo.setValue('Katyayani');
    expect(accNo.errors?.['pattern']).toBeTruthy()  //if we set a value which is out of pattern and less than minlength then the test case fails
    expect(accNo.valid).toBeFalsy();

    accNo.setValue('123456');
    expect(accNo.errors?.['minlength']).toBeTruthy() 
   
    accNo.setValue('12345678901234567890');
    expect(accNo.errors?.['maxlength']).toBeTruthy() 
  });

  //reEnterAccountNo input field
  it('Setting a static value for reaccNo input field test case',()=>{
    let reEnterAccNo = component.moneyTransferForm.controls['reEnterAccountNo'];
    reEnterAccNo.setValue('Katyayani'); //if we set a value which is out of pattern and less than minlength then the test case fails
    expect(reEnterAccNo.errors?.['pattern']).toBeTruthy() 
    expect(reEnterAccNo.invalid).toBeTruthy();

    reEnterAccNo.setValue('123456');
    expect(reEnterAccNo.errors?.['minlength']).toBeTruthy();

    reEnterAccNo.setValue('12345678901234567890');
    expect(reEnterAccNo.errors?.['maxlength']).toBeTruthy();
  });

  it('checking reEnter accountNo matching validation', () => {
    // Set the values in the form controls
    component.moneyTransferForm.controls['accountNumber'].setValue('12345678');
    component.moneyTransferForm.controls['reEnterAccountNo'].setValue('1234567890');

    // Retrieve the values from the form controls
    let accNo = component.moneyTransferForm.controls['accountNumber'].value;
    let reEnterAccNo = component.moneyTransferForm.controls['reEnterAccountNo'].value;

    let isMatching = accNo === reEnterAccNo;
    expect(isMatching).toBeFalsy(); // Expecting the values not to match
});

  //amount input field
  it('Setting static value for amount input field',()=>{
    let amount = component.moneyTransferForm.controls['amount'];
    amount.setValue('Gatti'); //if we set a value which is out of pattern and greater than maxlength then the test case fails
    expect(amount.errors?.['pattern']).toBeTruthy();

    amount.setValue('123456789');
    expect(amount.errors?.['maxlength']).toBeTruthy();
  });

  //remarks input field
  it('Setting static value for remarks input field',()=>{
    let remarks = component.moneyTransferForm.controls['remarks'];
    remarks.setValue('Remarks');
    expect(remarks.valid).toBeTruthy();
    expect(remarks.value).toEqual('Remarks')

    remarks.setValue("Helloooooooooooooooo");
    expect(remarks.errors?.['maxlength']).toBeTruthy()
  })

  //radioButtons input field
  it('should update form value when IMPS option is selected', () => {
    const option1Imps: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('input[value=IMPS]');
    option1Imps.click();
    expect(component.moneyTransferForm.value.paymentModeInput).toEqual('IMPS');
  });

  it('should update form value when NEFT option is selected', () => {
    const option2Neft: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('input[value=NEFT]');
    option2Neft.click();
    expect(component.moneyTransferForm.value.paymentModeInput).toEqual('NEFT');
  });

  it('should update form value when RTGS option is selected', () => {
    const option3RTGS: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('input[value=RTGS]');
    option3RTGS.click();
    expect(component.moneyTransferForm.value.paymentModeInput).toEqual('RTGS');
  });

  //select tag input field
  it('should have two options', () => {
    const selectOptions = fixture.debugElement.nativeElement.querySelectorAll('option');
    console.log(selectOptions);
    expect(selectOptions.length).toEqual(2);
  });

  it('should set the default value to Select Payee', () => {
    expect(component.moneyTransferForm.value.payee).toEqual('Select Payee');
  });

  it('checking whether oncancel method is called or not when cancel button is clicked',()=>{
    let cancelBtn = fixture.nativeElement.querySelector('#cancel');
    spyOn(component,'onCancel');
    cancelBtn.click();
    expect(component.onCancel).toHaveBeenCalled();
  });

  it('when send button is clicked onSubmit method is called',()=>{
    spyOn(component,'onSubmit');
    let sendBtn = fixture.nativeElement.querySelector('#send');
    sendBtn.disabled = false
    sendBtn.click();
    expect(component.onSubmit).toHaveBeenCalled()
  })
  

});