import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatementComponent } from './account-statement.component';

describe('AccountStatementComponent', () => {
  let component: AccountStatementComponent;
  let fixture: ComponentFixture<AccountStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountStatementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize default values', () => {
    const currentDate = new Date();
    expect(component.fromStatementDate).toEqual('');
    expect(component.toStatementDate).toEqual('');
    expect(component.showflag).toEqual('');
    expect(component.todayDate.getDate()).toEqual(currentDate.getDate());
    expect(component.selectStatementPeriod).toEqual('Last 7 Days');
    expect(component.selectedStatementFormat).toEqual('PDF File');
  });

  it('should set showflag to Show With Date when calling showWithDate()', () => {
    component.showWithDate();
    expect(component.showflag).toEqual('Show With Date');
  });

  it('should set showflag to Show With Period when calling showWithPeriod()', () => {
    component.showWithPeriod();
    expect(component.showflag).toEqual('Show With Period');
  });

  it('should update selectStatementPeriod when calling onSelectStatementPeriod()', () => {
    const selectedValue = { target: { value: 'Last 14 Days' }};
    component.onSelectStatementPeriod(selectedValue);
    expect(component.selectStatementPeriod).toEqual('Last 14 Days');
  });

  it('should update selectedStatementFormat when calling onSelectStatementFormat()', () => {
    const selectedValue = { target: { value: 'Excel Sheet' }};
    component.onSelectStatementFormat(selectedValue);
    expect(component.selectedStatementFormat).toEqual('Excel Sheet');
  });

  it('should display alert message when calling submitStatement() with valid data', () => {
    spyOn(window, 'alert');
    component.showflag = 'Show With Date';
    component.fromStatementDate = '2024-04-20';
    component.toStatementDate = '2024-04-23';
    component.selectedStatementFormat = 'PDF File';
    component.submitStatement();
    expect(window.alert).toHaveBeenCalledWith(`Downloaded Statement from 2024-04-20 to 2024-04-23 in PDF File Format`);
  });

  it('should display alert message when calling submitStatement() with invalid data', () => {
    spyOn(window, 'alert');
    component.submitStatement();
    expect(window.alert).toHaveBeenCalledWith('Choose Option and Select The Fields To Download');
  });

  it('should reset selectedStatementFormat, fromStatementDate, and toStatementDate when calling cancelStatement()', () => {
    component.selectedStatementFormat = 'Excel Sheet';
    component.fromStatementDate = '2024-04-20';
    component.toStatementDate = '2024-04-23';
    component.cancelStatement();
    expect(component.selectedStatementFormat).toEqual('');
    expect(component.fromStatementDate).toEqual('');
    expect(component.toStatementDate).toEqual('');
  });



});
