import { Injectable, TemplateRef } from '@angular/core';
import {
  NzNotificationService,
  NzNotificationDataOptions,
} from 'ng-zorro-antd/notification';

const DEFAULT_NOTIFICATION_PLACEMENT = 'bottomRight';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private nzNotificationService: NzNotificationService) {}

  createNotification(
    type: string,
    title: string,
    content: string,
    options: NzNotificationDataOptions = {}
  ) {
    this.nzNotificationService[type](title, content, {
      nzPlacement: DEFAULT_NOTIFICATION_PLACEMENT,
      ...options,
    });
  }

  createNotificationTemplate(
    template: TemplateRef<{}>,
    options: NzNotificationDataOptions = {}
  ) {
    this.nzNotificationService.template(template, {
      nzPlacement: DEFAULT_NOTIFICATION_PLACEMENT,
      ...options,
    });
  }
}
