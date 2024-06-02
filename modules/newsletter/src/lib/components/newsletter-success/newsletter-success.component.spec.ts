import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsletterSuccessComponent } from './newsletter-success.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewsletterSuccessComponent', () => {
  let component: NewsletterSuccessComponent;
  let fixture: ComponentFixture<NewsletterSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [NewsletterSuccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsletterSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
