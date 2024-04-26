import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHolderDetailsComponent } from './account-holder-details.component';

describe('AccountHolderDetailsComponent', () => {
  let component: AccountHolderDetailsComponent;
  let fixture: ComponentFixture<AccountHolderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountHolderDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountHolderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
