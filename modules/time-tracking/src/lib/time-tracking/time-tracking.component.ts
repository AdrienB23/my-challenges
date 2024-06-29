import { Component, HostListener, OnInit } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TimeTrackingService } from '../../../../../libs/shared/services/time-tracking.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TimeTracking } from '../../../../../libs/shared/models/time-tracking';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { DataTimeTracking } from '../../../../../libs/shared/models/data-time-tracking';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { DataTime } from '../../../../../libs/shared/models/data-time';

@Component({
  selector: 'lib-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrl: './time-tracking.component.css'
})
export class TimeTrackingComponent implements OnInit {
  text!: TimeTracking;
  language!: string;
  time = 1;
  timeData: DataTimeTracking = {
    data: []
  };
  currentTimeFrame: DataTime[] = [];
  displayData = false;
  detailHover!: boolean[];
  screenWidth!: number;
  typeList = [
    'work',
    'play',
    'study',
    'exercise',
    'social',
    'self-care'
  ]

  constructor(
    private timeTrackingService: TimeTrackingService,
    private route: ActivatedRoute,
  ) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.language = params.get('language')!
        )
      )
      .subscribe(language => {
        this.text = this.timeTrackingService.getTrad(this.language);
      });

    this.getTimeData();

    const boolList = [];
    for (let i = 0; i < 6; i++) {
      boolList.push(false);
    }
    this.detailHover = boolList;
  }

  getTimeData(): void {
    this.timeTrackingService.getData().subscribe({
      next: (data: any) => {
        for (let i = 0; i < data.length; i++) {
          this.timeData.data.push({
            title: data[i].title,
            timeframes: {
              daily: data[i].timeframes.daily,
              weekly: data[i].timeframes.weekly,
              monthly: data[i].timeframes.monthly
            }
          });
        }
        console.log('next : ' + this.timeData.data);
        this.getCurrentTimeFrame();
        this.displayData = true;
      },
      error: err => {
        console.log(err);
        return err;
      }
    });
  }

  getCurrentTimeFrame(): void {
    for (const elem of this.timeData.data) {
      switch (this.time) {
        case 0:
          this.currentTimeFrame.push(elem.timeframes.daily);
          break;
        case 1:
          this.currentTimeFrame.push(elem.timeframes.weekly);
          break;
        case 2:
          this.currentTimeFrame.push(elem.timeframes.monthly);
      }
    }
    console.log(this.currentTimeFrame);
  }

  changeTime(time: number) {
    this.time = time;
    this.currentTimeFrame = [];
    this.getCurrentTimeFrame();
  }
}
