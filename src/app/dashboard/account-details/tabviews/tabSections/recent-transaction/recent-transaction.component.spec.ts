import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RecentTransactionComponent } from './recent-transaction.component';
import { BankingdataService } from '../../../../../bankingdata.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';


describe('RecentTransactionComponent', () => {
  let component: RecentTransactionComponent;
  let fixture: ComponentFixture<RecentTransactionComponent>;
  let myservice:BankingdataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers:[BankingdataService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentTransactionComponent);
    component = fixture.componentInstance;
    myservice = TestBed.inject(BankingdataService);
    spyOn(myservice, 'getData').and.returnValue(of({ RecentTrans: [{}] }));
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data from service on ngOnInit', fakeAsync(() => {
    spyOn(console, 'log');
    component.ngOnInit();
    tick(); // Simulate the passage of time for the Observable to emit its value
    expect(myservice.getData).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalled(); // Assuming you want to log the data
    expect(component.RecentTrans.length).toBeGreaterThan(0); // Assuming data is successfully fetched and assigned
  }));
  

  
  
});
