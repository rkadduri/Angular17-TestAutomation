import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RecentTransactionComponent } from './recent-transaction.component';
import { BankingdataService } from '../../../../../bankingdata.service';
import { HttpClientModule } from '@angular/common/http';

describe('RecentTransactionComponent', () => {
  let component: RecentTransactionComponent;
  let fixture: ComponentFixture<RecentTransactionComponent>;
  let myservice:BankingdataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentTransactionComponent],
      imports: [HttpClientModule],
      providers:[BankingdataService]

    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentTransactionComponent);
    component = fixture.componentInstance;
    myservice = TestBed.inject(BankingdataService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data from service on ngOnInit', fakeAsync(() => {
    spyOn(console, 'log');
    component.ngOnInit();
    tick(); 
    expect(myservice.getData).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalled(); 
    expect(component.RecentTrans.length).toBeGreaterThan(0); 
  }));
  
});
