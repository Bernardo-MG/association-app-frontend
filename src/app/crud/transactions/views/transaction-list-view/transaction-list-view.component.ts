import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageInfo } from '@app/api/models/page-info';
import { PaginationRequest } from '@app/api/models/pagination-request';
import { RoutePaginationObserver } from '@app/api/route/observer/route-pagination-observer';
import { TransactionService } from '@app/crud/transactions/service/transaction.service';
import { Transaction } from '@app/models/transaction';

@Component({
  selector: 'crud-transaction-list-view',
  templateUrl: './transaction-list-view.component.html',
  styleUrls: ['./transaction-list-view.component.sass']
})
export class TransactionListViewComponent implements OnInit {

  public transactions: Transaction[] = [];

  public pageInfo = new PageInfo();

  private routePaginationObserver: RoutePaginationObserver;

  constructor(
    private service: TransactionService,
    route: ActivatedRoute
  ) {
    this.routePaginationObserver = new RoutePaginationObserver(route);
    
    // Listens for changes on pagination params
    this.routePaginationObserver.pagination.subscribe(pagination => {
      this.load(pagination);
    });
  }

  ngOnInit(): void {
    // Initial request
    if (this.routePaginationObserver.empty) {
      this.load();
    }
  }

  private load(pagination: PaginationRequest = new PaginationRequest()) {
    this.service.getAll(pagination).subscribe(page => {
      this.transactions = page.content;
      this.pageInfo = page;
    });
  }

}
