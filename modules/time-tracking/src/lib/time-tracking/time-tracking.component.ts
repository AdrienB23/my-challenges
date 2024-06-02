import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TimeTrackingService } from '../../../../../libs/shared/services/time-tracking.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TimeTracking } from '../../../../../libs/shared/models/time-tracking';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'lib-time-tracking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-tracking.component.html',
  styleUrl: './time-tracking.component.css',
})
export class TimeTrackingComponent implements OnInit {
  text!: TimeTracking;
  language!: string;

  constructor(
    private timeTrackingService: TimeTrackingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.language = params.get('language')!
        )
      )
      .subscribe(language => {
        this.text = this.timeTrackingService.getTrad(this.language);
      })
  }
}
