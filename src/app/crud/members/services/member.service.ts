import { Injectable } from '@angular/core';
import { PaginatedResponse } from '@app/api/models/paginated-response';
import { PaginationRequest } from '@app/api/models/pagination-request';
import { CreateOperations } from '@app/api/request/create-operations';
import { DeleteOperations } from '@app/api/request/delete-operations';
import { ReadOperations } from '@app/api/request/read-operations';
import { RequestClient } from '@app/api/request/request-client';
import { UpdateOperations } from '@app/api/request/update-operations';
import { Member } from '@app/models/member';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class MemberService {

  private memberUrl = environment.apiUrl + "/member";

  constructor(
    private client: RequestClient
  ) {}

  public getAll(pagination: PaginationRequest | undefined): Observable<PaginatedResponse<Member[]>> {
    const clt: ReadOperations<Member> = this.client.read(this.memberUrl);
    if (pagination) {
      clt.page(pagination);
      if (pagination.sort) {
        clt.sort(pagination.sort);
      }
    }
    return clt.fetchPaged();
  }

  public create(data: Member): Observable<Member> {
    const clt: CreateOperations<Member> = this.client.create(this.memberUrl);
    return clt.body(data).pushUnwrapped();
  }

  public update(id: number, data: Member): Observable<Member> {
    const clt: UpdateOperations<Member> = this.client.update(this.memberUrl);
    return clt.id(id).body(data).pushUnwrapped();
  }

  public delete(id: number): Observable<Member> {
    const clt: DeleteOperations<Member> = this.client.delete(this.memberUrl);
    return clt.id(id).pushUnwrapped();
  }

  public getOne(id: number): Observable<Member> {
    const clt: ReadOperations<Member> = this.client.read(this.memberUrl + `/${id}`);
    return clt.fetchOneUnwrapped();
  }

}
