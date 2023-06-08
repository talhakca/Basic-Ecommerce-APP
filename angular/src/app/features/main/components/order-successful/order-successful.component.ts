import { Component, OnInit } from '@angular/core';
import { IconType } from 'src/app/features/rappider/components/lib/utils';

@Component({
  selector: 'app-order-successful',
  templateUrl: './order-successful.component.html',
  styleUrls: ['./order-successful.component.scss']
})
export class OrderSuccessfulComponent implements OnInit {

  feedbackConfig = {
    icon: {
      name: 'fa-solid fa-shield-check fa-2xl',
      type: IconType.FontAwesome
    },
    title: 'Thank you for choosing us!',
    subtitle: 'We have successfuly ordered your products. You can view the status of the order by clicking My Account.',
    buttons: [
      {
        content: 'Continue Shopping',
        actionBehavior: 'route',
        redirectUrl: '/'
      },
      {
        content: 'View my orders',
        actionBehavior: 'route',
        redirectUrl: '/previously-purchased'
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
