import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './screen-home.component.html',
  styleUrls: ['./screen-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
