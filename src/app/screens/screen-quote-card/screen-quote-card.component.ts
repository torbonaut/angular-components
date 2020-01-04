import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-screen-quote-card',
  templateUrl: './screen-quote-card.component.html',
  styleUrls: ['./screen-quote-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenQuoteCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
