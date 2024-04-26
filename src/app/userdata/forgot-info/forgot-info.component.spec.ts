import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotInfoComponent } from './forgot-info.component';

describe('ForgotInfoComponent', () => {
  let component: ForgotInfoComponent;
  let fixture: ComponentFixture<ForgotInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgotInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
