import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ArticleService,
        {
          provide: HttpClient,
          useValue: {
            get: () => of([])
          }
        }
      ]
    });

    service = TestBed.inject(ArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
