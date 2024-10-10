import * as moment from 'moment';
import { Observable, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import {
  NgbDateStruct,
  NgbDate,
  NgbCalendar,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  model: NgbDateStruct;
  dayTemplateData: { date: NgbDate; current: boolean };
  clockHour$!: Observable<string>;
  clockMinute$!: Observable<string>;
  clockText$!: Observable<any>;

  customDayTemplate: any;

  @Input() progress: number = 0;
  isPlaying: boolean = false;
  totalWorkTime: number = 8 * 60 * 60 * 1000;
  startTime: moment.Moment | null = null;
  elapsedTime: number = 0;
  intervalSubscription: Subscription | null = null;
  pauseStartTime: moment.Moment | null = null;
  pausedTime: number = 0;

  constructor(
    private calendar: NgbCalendar,
    private formatter: NgbDateParserFormatter
  ) {
    this.model = this.calendar.getToday();
    this.dayTemplateData = { date: this.calendar.getToday(), current: false };
  }

  get dayTemplate() {
    return this.dayTemplateData.current ? this.customDayTemplate : undefined;
  }

  ngOnInit(): void {
    this.clockHour$ = interval(1000).pipe(map(() => this.getClockTime('hour')));

    this.clockMinute$ = interval(1000).pipe(
      map(() => this.getClockTime('minute'))
    );

    this.clockText$ = interval(1000).pipe(map(() => this.getClockText()));
  }

  ngOnDestroy(): void {
    this.stopProgress();
  }

  private getClockTime(unit: 'hour' | 'minute'): string {
    const date = moment();
    const hh = date.hours() % 12;
    const mm = date.minutes();
    const hourAngle = (hh + mm / 60) * 30;
    const minuteAngle = mm * 6;

    return unit === 'hour'
      ? `rotateZ(${hourAngle}deg)`
      : `rotateZ(${minuteAngle}deg)`;
  }

  private getClockText(): any {
    const date = moment();
    const dayWeek = date.format('dddd');
    const month = date.format('MMM');
    const day = date.format('D');
    const year = date.format('YYYY');
    let hh = date.format('h');
    const mm = date.format('mm');
    let ampm = date.format('A');

    hh = hh === '0' ? '12' : hh;

    return {
      dayWeek,
      month,
      day: ` ${day}, `,
      year,
      ampm,
      textHour: `${hh}:`,
      textMinutes: mm,
    };
  }

  startProgress(): void {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.startTime = moment();
      if (this.pauseStartTime) {
        this.pausedTime += moment().diff(this.pauseStartTime);
      }
      this.intervalSubscription = interval(1000).subscribe(() => {
        this.updateProgress();
      });
    }
  }

  stopProgress(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
    this.isPlaying = false;
    this.startTime = null;
    this.elapsedTime = 0;
    this.pauseStartTime = null;
    this.pausedTime = 0;
  }

  updateProgress(): void {
    if (this.startTime) {
      const currentTime = moment();
      const elapsedTimeSinceStart =
        currentTime.diff(this.startTime) - this.pausedTime;
      this.elapsedTime = elapsedTimeSinceStart;
      this.progress = (this.elapsedTime / this.totalWorkTime) * 100;
      if (this.elapsedTime >= this.totalWorkTime) {
        this.stopProgress();
      }
    }
  }

  pauseProgress(): void {
    if (this.isPlaying) {
      this.pauseStartTime = moment();
      this.isPlaying = false;
    } else {
      this.pausedTime += moment().diff(this.pauseStartTime);
      this.pauseStartTime = null;
      this.isPlaying = true;
    }
  }
}
