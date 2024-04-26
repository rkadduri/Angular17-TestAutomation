import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDashboardComponent } from './transfer-dashboard.component';

describe('TransferDashboardComponent', () => {
  let component: TransferDashboardComponent;
  let fixture: ComponentFixture<TransferDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
