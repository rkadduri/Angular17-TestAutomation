import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAccountSummaryComponent } from './transfer-account-summary.component';

describe('TransferAccountSummaryComponent', () => {
  let component: TransferAccountSummaryComponent;
  let fixture: ComponentFixture<TransferAccountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferAccountSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferAccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
