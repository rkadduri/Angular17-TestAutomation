import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSuccessfullComponent } from './transfer-successfull.component';

describe('TransferSuccessfullComponent', () => {
  let component: TransferSuccessfullComponent;
  let fixture: ComponentFixture<TransferSuccessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferSuccessfullComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferSuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
