import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePreviewComponent } from './article-preview.component';
import { ArticleService } from '../services/article.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ArticlePreviewComponent', () => {
  let component: ArticlePreviewComponent;
  let fixture: ComponentFixture<ArticlePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePreviewComponent ],
      providers: [
        ArticleService,
        {
          provide: HttpClient,
          useValue: {
            get: () => of([])
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ArticlePreviewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
