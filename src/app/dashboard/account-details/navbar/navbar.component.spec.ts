import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BankingdataService } from '../../../bankingdata.service';
import { HttpClientModule } from '@angular/common/http';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BankingdataService,{ provide: ActivatedRoute, useValue: {paramMap:of({})} }],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have svg element', () => {
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

  it('should have a navbar-brand class', () => {
    const linkElement = fixture.debugElement.query(By.css('.navbar-brand'));
    expect(linkElement).toBeTruthy();
  });

  it('should have a logo class', () => {
    const linkElement = fixture.debugElement.query(By.css('.logo'));
    expect(linkElement).toBeTruthy();
  });

  it('should display LOGO text', () => {
    const linkElement: HTMLElement = fixture.debugElement.query(By.css('.logo')).nativeElement;
    expect(linkElement.textContent).toContain('LOGO');
  });

  it('should have 4 nav items', () => {
    const navItems = fixture.debugElement.queryAll(By.css('.nav-item'));
    expect(navItems.length).toBe(4);
  });

  it('should have a logout button', () => {
    const logoutButton = fixture.debugElement.query(By.css('.logOutBtn'));
    expect(logoutButton).toBeTruthy();
  });

  it('should call selectTab method when clicking on a nav-link', () => {
    spyOn(component, 'selectTab');
    const navLink = fixture.debugElement.query(By.css('.accountDetails'));
    navLink.nativeElement.click();
    expect(component.selectTab).toHaveBeenCalled();
  });

  it('should have a logout button with routerLink', () => {
    const logoutButton = fixture.debugElement.query(By.css('.logOutBtn'));
    expect(logoutButton).toBeTruthy();
    const routerLink = logoutButton.nativeElement.getAttribute('routerLink');
    expect(routerLink).toBe('/login');
  });

  



});
