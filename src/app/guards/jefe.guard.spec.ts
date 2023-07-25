import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { jefeGuard } from './jefe.guard';

describe('jefeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => jefeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
