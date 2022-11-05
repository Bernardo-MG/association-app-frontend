import { Injectable } from '@angular/core';
import { PaginatedResponse } from '@app/api/models/paginated-response';
import { PaginationRequest } from '@app/api/models/pagination-request';
import { CreateOperations } from '@app/api/request/create-operations';
import { DeleteOperations } from '@app/api/request/delete-operations';
import { ReadOperations } from '@app/api/request/read-operations';
import { RequestClient } from '@app/api/request/request-client';
import { UpdateOperations } from '@app/api/request/update-operations';
import { Transaction } from '@app/models/transaction';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransactionService {

  private transactionUrl = environment.apiUrl + "/transaction";

  constructor(
    private client: RequestClient
  ) { }

  public getAll(pagination: PaginationRequest | undefined): Observable<PaginatedResponse<Transaction[]>> {
    const clt: ReadOperations<Transaction> = this.client.read(this.transactionUrl);
    if (pagination) {
      clt.page(pagination);
      if (pagination.sort) {
        clt.sort(pagination.sort);
      }
    }
    return clt.fetchPaged();
  }

  public create(data: Transaction): Observable<Transaction> {
    const clt: CreateOperations<Transaction> = this.client.create(this.transactionUrl);
    return clt.body(data).push().pipe(map(r => r.content));
  }

  public update(id: number, data: Transaction): Observable<Transaction> {
    const clt: UpdateOperations<Transaction> = this.client.update(this.transactionUrl);
    return clt.id(id).body(data).push().pipe(map(r => r.content));
  }

  public delete(id: number): Observable<Transaction> {
    const clt: DeleteOperations<Transaction> = this.client.delete(this.transactionUrl);
    return clt.id(id).push().pipe(map(r => r.content));
  }

  public getOne(id: number): Observable<Transaction> {
    const clt: ReadOperations<Transaction> = this.client.read(this.transactionUrl + `/${id}`);
    return clt.fetchOne().pipe(map(r => r.content));
  }

}
