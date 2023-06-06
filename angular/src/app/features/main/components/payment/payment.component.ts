import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  stripeClientSecret = 'sk_test_51NFvUxKhHK35k6aqMr2mf7OuZkRlV55GNWXdpDL9kZDPEZvZfOS01rnmNSjZknDmoqlnCyB5yvufVIC1CBeeT8I200Hywq3bYF';

  constructor() { }

  ngOnInit(): void {
  }

}
