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

import { Count } from '../models/count';
import { Product } from '../models/product';
import { ProductPartial } from '../models/product-partial';
import { ProductWithRelations } from '../models/product-with-relations';
import { Tax } from '../models/tax';

@Injectable({
  providedIn: 'root',
})
export class UserControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation userControllerFindProducts
   */
  static readonly UserControllerFindProductsPath = '/users/{id}/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findProducts()` instead.
   *
   * This method doesn't expect any request body.
   */
  findProducts$Response(params: {
    id: string;
    filter?: any;
  }): Observable<StrictHttpResponse<Array<ProductWithRelations>>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UserControllerFindProductsPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filter', params.filter, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductWithRelations>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findProducts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findProducts(params: {
    id: string;
    filter?: any;
  }): Observable<Array<ProductWithRelations>> {

    return this.findProducts$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProductWithRelations>>) => r.body as Array<ProductWithRelations>)
    );
  }

  /**
   * Path part for operation userControllerCreateProduct
   */
  static readonly UserControllerCreateProductPath = '/users/{id}/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProduct$Response(params: {
    id: string;
    body?: Product
  }): Observable<StrictHttpResponse<Product>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UserControllerCreateProductPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Product>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProduct(params: {
    id: string;
    body?: Product
  }): Observable<Product> {

    return this.createProduct$Response(params).pipe(
      map((r: StrictHttpResponse<Product>) => r.body as Product)
    );
  }

  /**
   * Path part for operation userControllerDeleteProduct
   */
  static readonly UserControllerDeleteProductPath = '/users/{id}/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProduct()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProduct$Response(params: {
    id: string;
    where?: any;
  }): Observable<StrictHttpResponse<Count>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UserControllerDeleteProductPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('where', params.where, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Count>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteProduct$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProduct(params: {
    id: string;
    where?: any;
  }): Observable<Count> {

    return this.deleteProduct$Response(params).pipe(
      map((r: StrictHttpResponse<Count>) => r.body as Count)
    );
  }

  /**
   * Path part for operation userControllerPatchProduct
   */
  static readonly UserControllerPatchProductPath = '/users/{id}/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchProduct$Response(params: {
    id: string;
    where?: any;
    body?: ProductPartial
  }): Observable<StrictHttpResponse<Count>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UserControllerPatchProductPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('where', params.where, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Count>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patchProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchProduct(params: {
    id: string;
    where?: any;
    body?: ProductPartial
  }): Observable<Count> {

    return this.patchProduct$Response(params).pipe(
      map((r: StrictHttpResponse<Count>) => r.body as Count)
    );
  }

  /**
   * Path part for operation userControllerFindTax
   */
  static readonly UserControllerFindTaxPath = '/users/{id}/tax';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findTax()` instead.
   *
   * This method doesn't expect any request body.
   */
  findTax$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Tax>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UserControllerFindTaxPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Tax>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findTax$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findTax(params: {
    id: string;
  }): Observable<Tax> {

    return this.findTax$Response(params).pipe(
      map((r: StrictHttpResponse<Tax>) => r.body as Tax)
    );
  }

}
