import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  defaultLanguage,
  supportedLanguages,
} from '../../definitions/language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translateService: TranslateService) {}

  /* active language */
  activeLanguage = defaultLanguage.name;

  initLanguagePack(): void {
    /* add languages */
    this.translateService.addLangs(
      supportedLanguages.map((language) => language.name)
    );
  }

  getBrowserLang(): string {
    return this.translateService.getBrowserLang();
  }

  changeLanguage(languageName: string): void {
    const language = supportedLanguages.find(
      (lang) => lang.name === languageName
    );
    if (language) {
      this.activeLanguage = language.name;
      this.translateService.use(language.name);
    }
  }

  getActiveLanguage(): string {
    return this.activeLanguage;
  }
}
