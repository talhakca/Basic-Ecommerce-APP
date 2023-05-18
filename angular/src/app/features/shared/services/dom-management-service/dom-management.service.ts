import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DomManagementService {
  constructor() {}

  /**
   * loads css to the page by url if it is not already loaded
   *
   * @param {string} url
   * @returns
   * @memberof DomManagementService
   */
  loadCSS(url: string) {
    // Create link
    const link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    link.type = 'text/css';

    const head = document.getElementsByTagName('head')[0];
    const links = head.getElementsByTagName('link');
    const style = head.getElementsByTagName('style')[0];

    // Check if the same style sheet has been loaded already.
    let isLoaded = false;
    for (let i = 0; i < links.length; i++) {
      const node = links[i];
      if (node.href.indexOf(link.href) > -1) {
        isLoaded = true;
      }
    }
    if (isLoaded) return;
    head.insertBefore(link, style);
  }

  /**
   * loads js to the page by url into body as a last element
   *
   * @param {string} url
   * @memberof DomManagementService
   */
  loadJS(url: string) {
    // Create script
    const script = document.createElement('script');
    script.src = url;
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(script);
  }
}
