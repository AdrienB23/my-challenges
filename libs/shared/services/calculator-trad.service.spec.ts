import { TestBed } from '@angular/core/testing';

import { CalculatorTradService } from './calculator-trad.service';

describe('CalculatorTradService', () => {
  let service: CalculatorTradService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorTradService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
