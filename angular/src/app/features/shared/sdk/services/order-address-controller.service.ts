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

import { Address } from '../models/address';

@Injectable({
  providedIn: 'root',
})
export class OrderAddressControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation orderAddressControllerGetAddress
   */
  static readonly OrderAddressControllerGetAddressPath = '/orders/{id}/address';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAddress()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddress$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Array<Address>>> {

    const rb = new RequestBuilder(this.rootUrl, OrderAddressControllerService.OrderAddressControllerGetAddressPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Address>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAddress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddress(params: {
    id: string;
  }): Observable<Array<Address>> {

    return this.getAddress$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Address>>) => r.body as Array<Address>)
    );
  }

}
