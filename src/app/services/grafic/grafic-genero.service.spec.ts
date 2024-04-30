import { TestBed } from '@angular/core/testing';

import { GraficGeneroService } from './grafic-genero.service';

describe('GraficGeneroService', () => {
  let service: GraficGeneroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraficGeneroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
