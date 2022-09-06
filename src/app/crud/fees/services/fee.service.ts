import { Injectable } from '@angular/core';
import { CreateOperations } from '@app/api/request/create-operations';
import { DeleteOperations } from '@app/api/request/delete-operations';
import { ReadOperations } from '@app/api/request/read-operations';
import { RequestClient } from '@app/api/request/request-client';
import { UpdateOperations } from '@app/api/request/update-operations';
import { Fee } from '@app/models/fee';
import { Member } from '@app/models/member';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  private feeUrl = environment.apiUrl + "/fee";

  private memberUrl = environment.apiUrl + "/member";

  constructor(
    private client: RequestClient
  ) { }

  public getAll(): Observable<Fee[]> {
    const clt: ReadOperations<Fee> = this.client.read(this.feeUrl);
    return clt.fetchUnwrapped();
  }

  public create(fee: Fee): Observable<Fee> {
    const clt: CreateOperations<Fee> = this.client.create(this.feeUrl);
    return clt.body(fee).pushUnwrapped();
  }

  public update(id: number, member: Fee): Observable<Fee> {
    const clt: UpdateOperations<Fee> = this.client.update(this.feeUrl);
    return clt.id(id).body(member).pushUnwrapped();
  }

  public delete(id: number): Observable<Fee> {
    const clt: DeleteOperations<Fee> = this.client.delete(this.feeUrl);
    return clt.id(id).pushUnwrapped();
  }

  public getOne(id: number): Observable<Fee> {
    const clt: ReadOperations<Fee> = this.client.read(this.feeUrl + `/${id}`);
    return clt.fetchOneUnwrapped();
  }

  public getAllMembers(): Observable<Member[]> {
    const clt: ReadOperations<Member> = this.client.read(this.memberUrl);
    return clt.fetchUnwrapped();
  }

}