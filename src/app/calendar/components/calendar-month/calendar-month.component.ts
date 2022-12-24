import { Component, OnInit } from '@angular/core';
import { Calendar } from '@app/calendar/models/calendar';
import { CalendarWeek } from '@app/calendar/models/calendar-week';

@Component({
  selector: 'calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.sass']
})
export class CalendarMonthComponent implements OnInit {

  public calendar: Calendar = new Calendar();

  private date = new Date();

  private monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor() { }

  public ngOnInit(): void {
    this.loadMonth();
  }

  public onGoPrevious() {
    this.date.setMonth(this.date.getMonth() - 1);
    this.loadMonth();
  }

  public onGoNext() {
    this.date.setMonth(this.date.getMonth() + 1);
    this.loadMonth();
  }

  private loadMonth() {
    this.calendar.year = this.date.getFullYear();
    this.calendar.month = this.getMonthName(this.date.getMonth());
    this.calendar.weeks = this.generateWeeks(this.calendar.year, this.date.getMonth());
  }

  private generateWeeks(currentYear: number, currentMonth: number): CalendarWeek[] {
    const weeks: { days: (number | null)[] }[] = [];
    let currentWeek: { days: (number | null)[] } = { days: [] };
    let currentDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
    const numDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Add empty days to the beginning of the first week to align it with the correct day of the week
    for (let i = 0; i < currentDayOfWeek; i++) {
      currentWeek.days.push(null);
    }

    // Add days to the calendar
    for (let i = 1; i <= numDaysInMonth; i++) {
      currentWeek.days.push(i);

      if (currentDayOfWeek === 6) {
        weeks.push(currentWeek);
        currentWeek = { days: [] };
        currentDayOfWeek = -1;
      }

      currentDayOfWeek++;
    }

    // Add empty days to the end of the last week to fill it out
    while (currentWeek.days.length < 7) {
      currentWeek.days.push(null);
    }

    weeks.push(currentWeek);

    return weeks;
  }

  private getMonthName(month: number): string {
    return this.monthNames[month];
  }

}
