import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BankingdataService } from '../../bankingdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-info',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgot-info.component.html',
  styleUrl: './forgot-info.component.css'
})
export class ForgotInfoComponent {
  isOpen: boolean = false;
  email: any;
  myForm!: FormGroup;
  formGroup!: FormGroup;
  userList: any;

  appUsers:any;

  constructor(private fb: FormBuilder,private modalService: NgbModal, private service:BankingdataService) {}

  @ViewChild('formElement') formElement!: ElementRef;
  
  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/),Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/),Validators.minLength(8)]]
  }, 
  {
    validators: this.passwordMatchValidator
  }); 
     this.userList = this.service.registerDetails
     this.appUsers = this.service.userData;
  }
  
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    console.log(password)
    console.log(confirmPassword)
    return password === confirmPassword ? null : { mismatch: true };
  }
 
  onSubmit() {
    if ((this.myForm.valid) && this.service.userData.includes(this.myForm.value.email)) {
      console.log("User is in Array");
      let userIndex=this.service.userData.indexOf(this.myForm.value.email);
      // console.log(userIndex+1);
      this.service.userData[userIndex+1] = this.myForm.value.password;
      console.log('Password Changed Successfully!!');
      // console.log(this.myForm.value.password)
      this.closePopup();
    }
    else{
       alert("Invalid Email")
    }
  }
  openPopup() {
    this.isOpen = true;
  }
  closePopup() {
    this.modalService.dismissAll();
  }

  ngAfterViewInit() {
    const formFields = this.formElement.nativeElement.querySelectorAll('input');
    formFields.forEach((field: HTMLInputElement) => {
      field.setAttribute('autocomplete', 'off');
    });
  }

}
