import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-screen-card',
  templateUrl: './screen-card.component.html',
  styleUrls: ['./screen-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
