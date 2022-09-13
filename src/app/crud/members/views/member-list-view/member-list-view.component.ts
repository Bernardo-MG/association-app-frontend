import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageInfo } from '@app/api/models/page-info';
import { PaginationRequest } from '@app/api/models/pagination-request';
import { RoutePaginationObserver } from '@app/api/route/observer/route-pagination-observer';
import { MemberService } from '@app/crud/members/services/member.service';
import { Member } from '@app/models/member';

@Component({
  selector: 'crud-member-list-view',
  templateUrl: './member-list-view.component.html',
  styleUrls: ['./member-list-view.component.sass']
})
export class MemberListViewComponent implements OnInit {

  public members: Member[] = [];

  public pageInfo = new PageInfo();

  private routePaginationObserver: RoutePaginationObserver;

  constructor(
    private service: MemberService,
    route: ActivatedRoute
  ) {
    this.routePaginationObserver = new RoutePaginationObserver(route)
  }

  ngOnInit(): void {
    // Initial request
    this.load({});
    // Listens for changes on pagination params
    this.routePaginationObserver.pagination.subscribe(pagination => {
      this.load(pagination);
    });
  }

  private load(pagination: PaginationRequest) {
    this.service.getAll(pagination).subscribe(page => {
      this.members = page.content;
      this.pageInfo = page;
    });
  }

}
