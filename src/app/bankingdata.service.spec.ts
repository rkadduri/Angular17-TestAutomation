import { TestBed } from '@angular/core/testing';

import { BankingdataService } from './bankingdata.service';

describe('BankingdataService', () => {
  let service: BankingdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(BankingdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
