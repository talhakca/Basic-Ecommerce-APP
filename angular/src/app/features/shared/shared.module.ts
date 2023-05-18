/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Services */
import { LanguageService } from './services/language-service/language.service';
import { BrowserStorageManagementService } from './services/browser-storage-management-service/browser-storage-management.service';
import { DomManagementService } from './services/dom-management-service/dom-management.service';
import { FormService } from './services/form-service/form.service';
import { NotificationService } from './services/notification-service/notification.service';

/* Pipes */
import { FormatDatePipe } from './pipes/format-date.pipe';

@NgModule({
  declarations: [
    /* Pipes */
    FormatDatePipe,
  ],
  providers: [
    /* Services */
    BrowserStorageManagementService,
    DomManagementService,
    FormService,
    NotificationService,
    LanguageService,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    /* Pipes */
    FormatDatePipe,
  ],
})
export class SharedModule {}
