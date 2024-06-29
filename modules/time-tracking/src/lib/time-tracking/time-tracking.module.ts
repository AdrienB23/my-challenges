import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TimeTrackingService } from '../../../../../libs/shared/services/time-tracking.service';
import { TimeTrackingComponent } from './time-tracking.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TimeTrackingComponent,
  ]
})
export class TimeTrackingModule {
  constructor(private timeTrackingService: TimeTrackingService) {}
}
