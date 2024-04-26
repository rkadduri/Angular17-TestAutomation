import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabviewsComponent } from './tabviews.component';

describe('TabviewsComponent', () => {
  let component: TabviewsComponent;
  let fixture: ComponentFixture<TabviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
