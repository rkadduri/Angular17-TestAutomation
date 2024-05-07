import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferSuccessfullComponent } from './transfer-successfull.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BankingdataService } from '../../../bankingdata.service';

describe('TransferSuccessfullComponent', () => {
  let component: TransferSuccessfullComponent;
  let fixture: ComponentFixture<TransferSuccessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        BankingdataService,
         {
           provide: ActivatedRoute,
           useValue: {
             paramMap: of({}) 
           }
         }
       ]
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
