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

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class OrderUserControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation orderUserControllerGetUser
   */
  static readonly OrderUserControllerGetUserPath = '/orders/{id}/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Array<User>>> {

    const rb = new RequestBuilder(this.rootUrl, OrderUserControllerService.OrderUserControllerGetUserPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<User>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser(params: {
    id: string;
  }): Observable<Array<User>> {

    return this.getUser$Response(params).pipe(
      map((r: StrictHttpResponse<Array<User>>) => r.body as Array<User>)
    );
  }

}
