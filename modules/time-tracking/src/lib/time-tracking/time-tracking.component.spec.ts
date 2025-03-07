import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeTrackingComponent } from './time-tracking.component';

describe('TimeTrackingComponent', () => {
  let component: TimeTrackingComponent;
  let fixture: ComponentFixture<TimeTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeTrackingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
