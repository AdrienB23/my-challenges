import { TestBed } from '@angular/core/testing';

import { NewsletterFormGuardService } from './newsletter-form-guard.service';

describe('NewsletterFormGuardService', () => {
  let service: NewsletterFormGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsletterFormGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
