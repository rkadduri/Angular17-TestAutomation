import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BankingdataService } from './bankingdata.service';

describe('BankingdataService', () => {
  let service: BankingdataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BankingdataService],
  });
  service = TestBed.inject(BankingdataService);
  httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getData', () => {
    it('should make an HTTP GET request', () => {
        service.getData().subscribe();
        const req = httpTestingController.expectOne('assets/DataBase/data.json');
        expect(req.request.method).toEqual('GET');
    });
  });

  describe('getUserData', () => {
    it('should return userData', () => {
        const userData = [
            'leela@gmail.com',
            'Leela@123',
            'katy@gmail.com',
            'Katy@12354',
            'jyosthna@gmail.com',
            'Jyos@123',
        ];
        expect(service.getUserData()).toEqual(userData);
    });
});

describe('setCurrentUser', () => {
  it('should set the current user', () => {
      const user = { name: 'Katy', email: 'katy@example.com' };
      service.setCurrentUser(user);
      expect(service.getCurrentUser()).toEqual(user);
  });
});

describe('getCurrentUser', () => {
  it('should return the current user', () => {
      const user = { name: 'Katy', email: 'katy@example.com' };
      service.setCurrentUser(user);
      expect(service.getCurrentUser()).toEqual(user);
  });
});

it('should initialize userData', () => {
  expect(service.userData).toEqual([
      'leela@gmail.com',
      'Leela@123',
      'katy@gmail.com',
      'Katy@12354',
      'jyosthna@gmail.com',
      'Jyos@123',
  ]);
});

it('should initialize registerDetails', () => {
  expect(service.registerDetails).toEqual([]);
});

it('should initialize selectBillerSuccess', () => {
  expect(service.selectBillerSuccess).toEqual([]);
});

it('should initialize rechargePaymentSuccess to false', () => {
  expect(service.rechargePaymentSuccess).toBeFalse();
});

describe('checkUserInApp', () => {
  it('should return true if the user is in userData', () => {
      const searchUser = 'leela@gmail.com';
      expect(service.checkUserInApp(searchUser)).toBeTrue();
  });

  it('should return false if the user is not in userData', () => {
      const searchUser = 'random@gmail.com';
      expect(service.checkUserInApp(searchUser)).toBeFalse();
  });
});

describe('trimNameFromEmail', () => {
  it('should trim and capitalize the name from the email', () => {
      const email = 'example@gmail.com';
      expect(service.trimNameFromEmail(email)).toEqual('Example');
  });

  it('should handle emails with leading/trailing spaces', () => {
      const email = '  example@gmail.com  ';
      expect(service.trimNameFromEmail(email)).toEqual('Example');
  });

  it('should handle emails with multiple parts', () => {
      const email = 'admin.dio@example.com';
      expect(service.trimNameFromEmail(email)).toEqual('Admin.dio');
  });
});
it('should initialize balance to 50000', () => {
  expect(service.balance).toEqual(50000);
});

it('should initialize trimmedString to an empty string', () => {
  expect(service.trimmedString).toEqual('');
});

it('should initialize addPayee with "Select Payee" and "Dileep"', () => {
  expect(service.addPayee).toEqual(['Select Payee', 'Dileep']);
});

it('should initialize accountData with an object', () => {
  expect(service.accountData).toEqual([
      {
          AccountHolder: service.trimmedString,
          AccountType: 'Savings Account',
          AccountNumber: '1234567890111213',
          AccountIFSCCode: 'ABCD0001234',
          AccountBranch: 'KPHB',
          AvailableBalanceinRupees: service.balance,
      },
  ]);
});

it('should initialize isTransactionHistory to false', () => {
  expect(service.isTransactionHistory).toBeFalse();
});

it('should initialize isAccountStatement to false', () => {
  expect(service.isAccountStatement).toBeFalse();
});

it('should initialize breadCrumb with ["Account Details"]', () => {
  expect(service.breadCrumb).toEqual(['Account Details']);
});

it('should initialize paymentHistory as an empty array', () => {
  expect(service.paymentHistory).toEqual([]);
});

it('should initialize paymentSuccess as an empty array', () => {
  expect(service.paymentSucess).toEqual([]);
});

it('should initialize tabNames with an array of objects', () => {
  expect(service.tabNames).toEqual([
      {
          displayName: 'Account Details',
          routerLink: '/accountDashboard',
      },
      {
          displayName: 'Payments',
          routerLink: '/paymentDashboard',
      },
      {
          displayName: 'Fund Transfers',
          routerLink: '/transferDashboard',
      },
  ]);
});

it('should initialize userSelectedTab with the displayName of the first tab', () => {
  expect(service.userSelectedTab).toEqual('Account Details');
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
