import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeTracking } from '../models/time-tracking';
import { Time } from '@angular/common';
import { TimeTrackingComponent } from '@my-challenges/time-tracking';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackingService {
  private dataUrl = 'assets/data/';

  constructor(private http: HttpClient) {}

  getTrad(language: string): TimeTracking {
    const timeTrackingTexts: TimeTracking = {
      report: "",
      daily: "",
      weekly: "",
      monthly: "",
      types: [],
      last: [],
      hours: ""
    }
    this.http.get(this.dataUrl + "time-tracking-trad.json")
      .subscribe({
        next: (data: any)  => {
          timeTrackingTexts.report = data[language].report;
          timeTrackingTexts.daily = data[language].daily;
          timeTrackingTexts.weekly = data[language].weekly;
          timeTrackingTexts.monthly = data[language].monthly;
          timeTrackingTexts.types = data[language].types;
          timeTrackingTexts.last = data[language].last;
          timeTrackingTexts.hours = data[language].hours;
        },
        error: err => {
          console.log(err);
          return err;
        }
      })
    return timeTrackingTexts;
  }
}
