import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../app.routes';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let router:Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [DashboardComponent],
      imports: [ReactiveFormsModule,HttpClientModule,RouterTestingModule.withRoutes(routes)],
      providers:[Router]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize form with empty values', () => {
    let email = component.loginForm.controls['email']
    expect(email.invalid).toBeTruthy()
    expect(email.untouched).toBeTruthy()
    
  });
  it('it shows the Email set values', () => {
    let email = component.loginForm.controls['email']
    email.setValue('jyosthnagmail.com')
    expect(email.errors?.['pattern']).toBeTruthy()
    email.setValue('jyosthna@gmail.com')
    expect(email.value).toEqual('jyosthna@gmail.com')

  });
  it('should initialize form with empty values of Password', () => {
    let password = component.loginForm.controls['password']
    expect(password.invalid).toBeTruthy()
    expect(password.untouched).toBeTruthy()
  });
  it('it shows the Password set value', () => {
    let password = component.loginForm.controls['password']
    password.setValue('jyos@123');
    expect(password.errors?.['pattern']).toBeTruthy();
    password.setValue('Jyos@123')
    expect(password.value).toEqual('Jyos@123')

  });
  it('should call onSubmit method on form submission', () => {
    spyOn(component, 'onSubmit'); // Spy on the onSubmit method

    // Simulate form submission
    const formElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalled(); // Expect onSubmit method to have been called
  });
  it('should call openForgotPasswordPopup method on link click', () => {
    // Spy on the method
    spyOn(component, 'openForgotPasswordPopup');
  
    // Find the link element in the fixture
    const linkElement = fixture.nativeElement.querySelector('a');
  
    // Trigger a click event on the link
    linkElement.click();
  
    // Expect that the openForgotPasswordPopup method was called
    expect(component.openForgotPasswordPopup).toHaveBeenCalled();
  });

  xit('navigate to dashboard when login button is clicked',()=>{
     spyOn(router,'navigate')
   
    // expect(spy).toHaveBeenCalled();
    let loginBtn = fixture.nativeElement.querySelector('#login');
    console.log(loginBtn)
    loginBtn.disabled = false
    loginBtn.click()
    expect(router.navigate).toEqual('/dashboard')
  })
  });

