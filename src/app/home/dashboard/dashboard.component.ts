import * as moment from 'moment';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
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
export class DashboardComponent implements OnInit {
  model: NgbDateStruct;
  dayTemplateData: { date: NgbDate; current: boolean };
  clockHour$!: Observable<string>;
  clockMinute$!: Observable<string>;
  clockText$!: Observable<any>;

  customDayTemplate: any;

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
}
