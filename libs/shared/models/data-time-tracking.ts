import { DataTime } from './data-time';

export interface DataTimeTracking {
  data:
    {
      title: string;
      timeframes: {
        daily: DataTime,
        weekly: DataTime,
        monthly: DataTime
      };
    } []
}
