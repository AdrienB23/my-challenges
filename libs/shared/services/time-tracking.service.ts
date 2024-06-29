import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeTracking } from '../models/time-tracking';
import { DataTimeTracking } from '../models/data-time-tracking';
import { DataTime } from '../models/data-time';
import { Observable } from 'rxjs';

const dataUrl = 'assets/data/';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackingService {

  constructor(private http: HttpClient) {}

  getTrad(language: string): TimeTracking {
    const timeTrackingTexts: TimeTracking = {
      report: "",
      profile: "",
      timeList: [],
      types: [],
      last: [],
      hours: ""
    }
    this.http.get(dataUrl + "time-tracking-trad.json")
      .subscribe({
        next: (data: any)  => {
          timeTrackingTexts.report = data[language].report;
          timeTrackingTexts.profile = data[language].profile;
          timeTrackingTexts.timeList = data[language].timeList;
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

  getData(): Observable<DataTimeTracking> {
    const timeTrackingData: DataTimeTracking = {
      data: [{
        title: "",
        timeframes: {
          daily: {current: "", previous: ""},
          weekly: {current: "", previous: ""},
          monthly: {current: "", previous: ""},
        }
      }]
    };
    return this.http.get<DataTimeTracking>(dataUrl + "time-tracking-values.json");
  }
}
