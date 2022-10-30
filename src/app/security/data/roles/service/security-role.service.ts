import { Injectable } from '@angular/core';
import { PaginatedResponse } from '@app/api/models/paginated-response';
import { PaginationRequest } from '@app/api/models/pagination-request';
import { CreateOperations } from '@app/api/request/create-operations';
import { DeleteOperations } from '@app/api/request/delete-operations';
import { ReadOperations } from '@app/api/request/read-operations';
import { RequestClient } from '@app/api/request/request-client';
import { UpdateOperations } from '@app/api/request/update-operations';
import { Role } from '@app/security/models/role';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class SecurityRoleService {

  private roleUrl = environment.apiUrl + "/security/role";

  constructor(
    private client: RequestClient
  ) { }

  public getAll(pagination: PaginationRequest | undefined): Observable<PaginatedResponse<Role[]>> {
    const clt: ReadOperations<Role> = this.client.read(this.roleUrl);
    if (pagination) {
      clt.page(pagination);
      if (pagination.sort) {
        clt.sort(pagination.sort);
      }
    }
    return clt.fetchPaged();
  }

  public create(data: Role): Observable<Role> {
    const clt: CreateOperations<Role> = this.client.create(this.roleUrl);
    return clt.body(data).pushUnwrapped();
  }

  public update(id: number, data: Role): Observable<Role> {
    const clt: UpdateOperations<Role> = this.client.update(this.roleUrl);
    return clt.id(id).body(data).pushUnwrapped();
  }

  public delete(id: number): Observable<Role> {
    const clt: DeleteOperations<Role> = this.client.delete(this.roleUrl);
    return clt.id(id).pushUnwrapped();
  }

  public getOne(id: number): Observable<Role> {
    const clt: ReadOperations<Role> = this.client.read(this.roleUrl + `/${id}`);
    return clt.fetchOneUnwrapped();
  }

}