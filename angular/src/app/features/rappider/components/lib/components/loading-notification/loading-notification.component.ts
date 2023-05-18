import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NotificationService } from '../../services';

@Component({
  selector: 'rappider-loading-notification',
  templateUrl: './loading-notification.component.html',
  styleUrls: ['./loading-notification.component.scss'],
})
export class RappiderLoadingNotificationComponent implements OnChanges {
  @ViewChild('loadingNotificationTemplate', { static: false })
  loadingNotificationTemplate: any;

  @Input() loading: boolean;
  @Input() loadingText = 'Loading...';

  constructor(private notificationService: NotificationService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.loading.currentValue) {
      this.notificationService.createNotificationTemplate(
        this.loadingNotificationTemplate,
        { nzDuration: 0 }
      );
    } else {
      this.notificationService.removeAllNotifications();
    }
  }
}
