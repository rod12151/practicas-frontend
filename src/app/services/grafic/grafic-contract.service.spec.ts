import { TestBed } from '@angular/core/testing';

import { GraficContractService } from './grafic-contract.service';

describe('GraficContractService', () => {
  let service: GraficContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraficContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
