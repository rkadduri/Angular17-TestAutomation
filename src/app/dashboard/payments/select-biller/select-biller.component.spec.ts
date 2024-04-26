import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBillerComponent } from './select-biller.component';

describe('SelectBillerComponent', () => {
  let component: SelectBillerComponent;
  let fixture: ComponentFixture<SelectBillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectBillerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectBillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
