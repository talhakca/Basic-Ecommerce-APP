/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Role } from '../models/role';

@Injectable({
  providedIn: 'root',
})
export class UserRoleControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation userRoleControllerGetRole
   */
  static readonly UserRoleControllerGetRolePath = '/users/{id}/role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRole$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Array<Role>>> {

    const rb = new RequestBuilder(this.rootUrl, UserRoleControllerService.UserRoleControllerGetRolePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Role>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRole(params: {
    id: string;
  }): Observable<Array<Role>> {

    return this.getRole$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Role>>) => r.body as Array<Role>)
    );
  }

}
