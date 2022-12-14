import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Calendar } from '@app/calendar/models/calendar';
import { CalendarDay } from '@app/calendar/models/calendar-day';
import { CalendarNote } from '@app/calendar/models/calendar-note';
import { CalendarWeek } from '@app/calendar/models/calendar-week';

@Component({
  selector: 'calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.sass']
})
export class CalendarMonthComponent implements OnInit, OnChanges {

  @Input() public notes: CalendarNote[] = [];

  @Input() public dateUrl: (year: number, day: number) => string = (d => '');

  @Input() public date = new Date();

  @Output() public dateChange = new EventEmitter<Date>();

  public calendar: Calendar = new Calendar();

  public monthName: string = "";

  private monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor() {
    this.date.setHours(0);
    this.date.setMinutes(0);
    this.date.setSeconds(0);
    this.date.setMilliseconds(0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadMonth();
  }

  public ngOnInit(): void {
    this.loadMonth();
    this.dateChange.emit(this.date);
  }

  public onGoPrevious() {
    this.date.setMonth(this.date.getMonth() - 1);
    this.loadMonth();
    this.dateChange.emit(this.date);
  }

  public onGoNext() {
    this.date.setMonth(this.date.getMonth() + 1);
    this.loadMonth();
    this.dateChange.emit(this.date);
  }

  public getDateInfo(year: number, month: number, day: number | null): CalendarNote | undefined {
    return this.notes.find(d => d.year === year && d.month === month && d.day === day);
  }

  private loadMonth() {
    this.calendar.year = this.date.getFullYear();
    this.calendar.month = this.date.getMonth();
    this.monthName = this.getMonthName(this.calendar.month);
    this.calendar.weeks = this.generateWeeks(this.calendar.year, this.date.getMonth());
    this.calendar.weeks.forEach(w => w.days.forEach(d => {
      const note = this.getDateInfo(this.calendar.year, this.calendar.month, d.number);
      if (note) {
        d.notes.push(note);
      }
    }))
  }

  private generateWeeks(currentYear: number, currentMonth: number): CalendarWeek[] {
    const weeks: CalendarWeek[] = [];
    let currentWeek: CalendarWeek = new CalendarWeek();
    let currentDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
    const numDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Add empty days to the beginning of the first week to align it with the correct day of the week
    for (let i = 0; i < currentDayOfWeek; i++) {
      currentWeek.days.push(new CalendarDay(null));
    }

    // Add days to the calendar
    for (let i = 1; i <= numDaysInMonth; i++) {
      currentWeek.days.push(new CalendarDay(i));

      if (currentDayOfWeek === 6) {
        weeks.push(currentWeek);
        currentWeek = new CalendarWeek();
        currentDayOfWeek = -1;
      }

      currentDayOfWeek++;
    }

    // Add empty days to the end of the last week to fill it out
    while (currentWeek.days.length < 7) {
      currentWeek.days.push(new CalendarDay(null));
    }

    weeks.push(currentWeek);

    return weeks;
  }

  private getMonthName(month: number): string {
    return this.monthNames[month];
  }

}
