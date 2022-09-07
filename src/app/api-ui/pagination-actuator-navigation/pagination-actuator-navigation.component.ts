import { Component, Input } from '@angular/core';
import { ReplaySubjectPaginationActuator } from '../../api/pagination/replay-subject-pagination-actuator';

@Component({
  selector: 'pagination-actuator-navigation',
  templateUrl: './pagination-actuator-navigation.component.html',
  styleUrls: ['./pagination-actuator-navigation.component.sass']
})
export class PaginationActuatorNavigationComponent {

  @Input() paginator: ReplaySubjectPaginationActuator = new ReplaySubjectPaginationActuator();

  constructor() { }

  public moveToPage(page: number) {
    this.paginator.toPage(page);
  }

  public movePrevious(page: number) {
    this.paginator.toPreviousPage();
  }

  public moveNext(page: number) {
    this.paginator.toNextPage();
  }

}