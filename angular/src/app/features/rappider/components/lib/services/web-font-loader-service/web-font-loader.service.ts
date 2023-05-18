import { Injectable } from '@angular/core';
import * as WebFont from 'webfontloader';

@Injectable({
  providedIn: 'root',
})
export class WebFontLoaderService {
  /**
   *families property  must have font-family names in a array.
   *
   * @param {any[]} item
   * @memberof WebFontLoaderService
   */
  useWebFontLoader(item: any[]) {
    WebFont.load({
      google: {
        families: item,
      },
    });
  }
  constructor() {}
}
