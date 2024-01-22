import { Component } from '@angular/core';
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
export class DashboardComponent {
  model: NgbDateStruct;
  dayTemplateData: { date: NgbDate; current: boolean };

  // Add this property
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
}
