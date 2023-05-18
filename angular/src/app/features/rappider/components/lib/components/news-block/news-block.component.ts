import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';

@Component({
  selector: 'rappider-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss'],
})
export class RappiderNewsBlockComponent implements OnInit, OnChanges {
  /* news title */
  @Input() title: string;
  /* content text */
  @Input() content: string;
  /* image url for background */
  @Input() backgroundImageUrl: string;
  /* date to display */
  @Input() date: Date | string;
  /* router link for redirect */
  @Input() routerLink: string;

  url: string;

  ngOnInit(): void {
    this.setUrlForBackgroundImage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    /* checks if background image url  changes */
    if (changes.backgroundImageUrl) {
      /* change background image */
      this.setUrlForBackgroundImage();
    }
  }

  setUrlForBackgroundImage() {
    this.url = `url(${this.backgroundImageUrl})`;
  }
}
