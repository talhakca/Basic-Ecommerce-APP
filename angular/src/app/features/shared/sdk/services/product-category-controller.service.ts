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

import { Category } from '../models/category';
import { Count } from '../models/count';
import { NewProductCategory } from '../models/new-product-category';
import { Product } from '../models/product';
import { ProductCategory } from '../models/product-category';
import { ProductCategoryPartial } from '../models/product-category-partial';
import { ProductCategoryWithRelations } from '../models/product-category-with-relations';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation productCategoryControllerCount
   */
  static readonly ProductCategoryControllerCountPath = '/product-categories/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `count()` instead.
   *
   * This method doesn't expect any request body.
   */
  count$Response(params?: {
    where?: any;
  }): Observable<StrictHttpResponse<Count>> {

    const rb = new RequestBuilder(this.rootUrl, ProductCategoryControllerService.ProductCategoryControllerCountPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `count$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  count(params?: {
    where?: any;
  }): Observable<Count> {

    return this.count$Response(params).pipe(
      map((r: StrictHttpResponse<Count>) => r.body as Count)
    );
  }

  /**
   * Path part for operation productCategoryControllerFindCategory
   */
  static readonly ProductCategoryControllerFindCategoryPath = '/product-categories/{id}/category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCategory$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Category>> {

    const rb = new RequestBuilder(this.rootUrl, ProductCategoryControllerService.ProductCategoryControllerFindCategoryPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Category>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCategory(params: {
    id: string;
  }): Observable<Category> {

    return this.findCategory$Response(params).pipe(
      map((r: StrictHttpResponse<Category>) => r.body as Category)
    );
  }

  /**
   * Path part for operation productCategoryControllerFindProduct
   */
  static readonly ProductCategoryControllerFindProductPath = '/product-categories/{id}/product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findProduct()` instead.
   *
   * This method doesn't expect any request body.
   */
  findProduct$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Product>> {

    const rb = new RequestBuilder(this.rootUrl, ProductCategoryControllerService.ProductCategoryControllerFindProductPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `findProduct$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findProduct(params: {
    id: string;
  }): Observable<Product> {

    return this.findProduct$Response(params).pipe(
      map((r: StrictHttpResponse<Product>) => r.body as Product)
    );
  }

  /**
   * Path part for operation productCategoryControllerFindById
   */
  static readonly ProductCategoryControllerFindByIdPath = '/product-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: {
    id: string;
    filter?: any;
  }): Observable<StrictHttpResponse<ProductCategoryWithRelations>> {

    const rb = new RequestBuilder(this.rootUrl, ProductCategoryControllerService.ProductCategoryControllerFindByIdPath, 'get');
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
        return r as StrictHttpResponse<ProductCategoryWithRelations>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: {
    id: string;
    filter?: any;
  }): Observable<ProductCategoryWithRelations> {

    return this.findById$Response(params).pipe(
      map((r: StrictHttpResponse<ProductCategoryWithRelations>) => r.body as ProductCategoryWithRelations)
    );
  }

  /**
   * Path part for operation productCategoryControllerReplaceById
   */
  static readonly ProductCategoryControllerReplaceByIdPath = '/product-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById$Response(params: {
    id: string;
    body?: ProductCategory
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProductCategoryControllerService.ProductCategoryControllerReplaceByIdPath, 'put');
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
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `replaceById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById(params: {
    id: string;
    body?: ProductCategory
  }): Observable<any> {

    return this.replaceById$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation productCategoryControllerDeleteById
   */
  static readonly ProductCategoryControllerDeleteByIdPath = '/product-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProductCategoryControllerService.ProductCategoryControllerDeleteByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById(params: {
    id: string;
  }): Observable<any> {

    return this.deleteById$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation productCategoryControllerUpdateById
   */
  static readonly ProductCategoryControllerUpdateByIdPath = '/product-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById$Response(params: {
    id: string;
    body?: ProductCategoryPartial
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ProductCategoryControllerService.ProductCategoryControllerUpdateByIdPath, 'patch');
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
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById(params: {
    id: string;
    body?: ProductCategoryPartial
  }): Observable<any> {

    return this.updateById$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation productCategoryControllerFind
   */
  static readonly ProductCategoryControllerFindPath = '/product-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params?: {
    filter?: any;
  }): Observable<StrictHttpResponse<Array<ProductCategoryWithRelations>>> {

    const rb = new RequestBuilder(this.rootUrl, ProductCategoryControllerService.ProductCategoryControllerFindPath, 'get');
    if (params) {
      rb.query('filter', params.filter, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductCategoryWithRelations>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `find$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  find(params?: {
    filter?: any;
  }): Observable<Array<ProductCategoryWithRelations>> {

    return this.find$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ProductCategoryWithRelations>>) => r.body as Array<ProductCategoryWithRelations>)
    );
  }

  /**
   * Path part for operation productCategoryControllerCreate
   */
  static readonly ProductCategoryControllerCreatePath = '/product-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params?: {
    body?: NewProductCategory
  }): Observable<StrictHttpResponse<ProductCategory>> {

    const rb = new RequestBuilder(this.rootUrl, ProductCategoryControllerService.ProductCategoryControllerCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductCategory>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params?: {
    body?: NewProductCategory
  }): Observable<ProductCategory> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<ProductCategory>) => r.body as ProductCategory)
    );
  }

  /**
   * Path part for operation productCategoryControllerUpdateAll
   */
  static readonly ProductCategoryControllerUpdateAllPath = '/product-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAll$Response(params?: {
    where?: any;
    body?: Array<ProductCategoryPartial>
  }): Observable<StrictHttpResponse<Count>> {

    const rb = new RequestBuilder(this.rootUrl, ProductCategoryControllerService.ProductCategoryControllerUpdateAllPath, 'patch');
    if (params) {
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
   * To access the full response (for headers, for example), `updateAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAll(params?: {
    where?: any;
    body?: Array<ProductCategoryPartial>
  }): Observable<Count> {

    return this.updateAll$Response(params).pipe(
      map((r: StrictHttpResponse<Count>) => r.body as Count)
    );
  }

}
