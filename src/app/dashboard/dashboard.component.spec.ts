import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PaymentsComponent } from './payments/payments.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { By } from '@angular/platform-browser';
// import { RegisterService } from '../register.service';
import { inject } from '@angular/core';
import { BankingdataService } from '../bankingdata.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service:BankingdataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [DashboardComponent,AccountDetailsComponent,PaymentsComponent,FundTransferComponent],
      imports: [ReactiveFormsModule,HttpClientModule],
      providers: [BankingdataService,{ provide: ActivatedRoute, useValue: {paramMap:of({})} }],
      
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(BankingdataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the SVG element', () => {
    const svgElement = fixture.debugElement.query(By.css('svg'));
    expect(svgElement).toBeTruthy();
  });

  it('should have correct width and height attributes', () => {
    const svgElement: SVGElement = fixture.debugElement.query(By.css('svg')).nativeElement;
    expect(svgElement.getAttribute('width')).toBe('32');
    expect(svgElement.getAttribute('height')).toBe('32');
  });

  it('should have path element with correct fill color', () => {
    const pathElement: SVGPathElement = fixture.debugElement.query(By.css('path')).nativeElement;
    expect(pathElement.getAttribute('fill')).toBe('#F16A22');
  });

  it('should render the path element', () => {
    const pathElement = fixture.debugElement.query(By.css('path'));
    expect(pathElement).toBeTruthy();
  });

  it('should have correct attributes for path', () => {
    const pathElement = fixture.debugElement.query(By.css('path'));
    expect(pathElement.nativeElement.getAttribute('d')).toBe('M32 0C32 4.2023 31.1723 8.36345 29.5641 12.2459C27.956 16.1283 25.5989 19.6559 22.6274 22.6274C19.6559 25.5989 16.1283 27.956 12.2459 29.5641C8.36345 31.1723 4.2023 32 0 32L1.39876e-06 0H32Z');
    expect(pathElement.nativeElement.getAttribute('fill')).toBe('#F16A22');
  });

  it('should have a logo class', () => {
    const linkElement = fixture.debugElement.query(By.css('.logo'));
    expect(linkElement).toBeTruthy();
  });

  it('should display LOGO text', () => {
    const linkElement: HTMLElement = fixture.debugElement.query(By.css('.logo')).nativeElement;
    expect(linkElement.textContent).toContain('LOGO');
  });

  it('Check the String is correctly Trimmed or not', () => {
    const email = 'leela@gmail.com';
    service.trimmedString = 'Leela';
    const trimName = service.trimNameFromEmail(email);
    const trimmedString = service.trimmedString;
    expect(trimmedString).toBeDefined();
    expect(trimName).toEqual(service.trimmedString);
  });

  it('should have correct width and height attributes', () => {
    const svgElement: SVGElement = fixture.debugElement.query(By.css('#avatar')).nativeElement;
    expect(svgElement.getAttribute('width')).toBe('40');
    expect(svgElement.getAttribute('height')).toBe('40');
  });

  it('should contain a button element with "LogOut" text', () => {
    const buttonElement = fixture.debugElement.query(By.css('.btn.btn-primary'));
    expect(buttonElement.nativeElement.textContent.trim()).toBe('LogOut');
  });

  it('should set userSelectedTab property and navigate to accountDashboard', () => {
    const spyService = spyOn(service, 'userSelectTab').and.stub(); 
    component.gotoAccountDashboard();

    expect(service.userSelectedTab).toEqual(service.tabNames[0].displayName); 
    expect(spyService).toHaveBeenCalledWith(service.userSelectedTab); 
  });

  it('should set userSelectedTab property and navigate to transferDashboard', () => {
    const spyService = spyOn(service, 'userSelectTab').and.stub(); 
    component.gotoTransferDashboard();
    expect(service.userSelectedTab).toEqual(service.tabNames[2].displayName);
    expect(spyService).toHaveBeenCalledWith(service.userSelectedTab); 
  });

  it('should set userSelectedTab property and navigate to paymentDashboard', () => {
    const spyService = spyOn(service, 'userSelectTab').and.stub();
    component.gotoPaymentDashboard();
    expect(service.userSelectedTab).toEqual(service.tabNames[1].displayName);
    expect(spyService).toHaveBeenCalledWith(service.userSelectedTab);
  });

  
});
