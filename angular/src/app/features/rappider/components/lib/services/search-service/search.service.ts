/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  /**
   *
   *  Searches the list by desired fields (keys). Returns the results by grouping for each field (keys)
   *
   * @param {*} list
   * @param {Fuse.IFuseOptions<unknown>} options
   * @param {string} pattern
   * @return {*}  {*}
   * @memberof SearchService
   */
  searchAndGroupByOptions(
    list: any,
    options: Fuse.IFuseOptions<unknown>,
    pattern: string
  ): any {
    /* includeMatches: true => add matching keys to search results */
    options = {
      ...options,
      includeMatches: true,
    };

    const results = this.searchByOptions(list, options, pattern);

    /* Assign grouppedresults for each key */
    const grouppedResults = options.keys.reduce((acc, key: string) => {
      acc[key] = results
        .filter((result) => result.matches.some((match) => match.key === key))
        .map((result) => result.item);
      return acc;
    }, {});

    return grouppedResults;
  }

  searchByOptions(
    list: any,
    options: Fuse.IFuseOptions<unknown>,
    pattern: string
  ): any {
    const fuse = new Fuse(list, options);
    return pattern ? fuse.search(pattern) : list;
  }
}
