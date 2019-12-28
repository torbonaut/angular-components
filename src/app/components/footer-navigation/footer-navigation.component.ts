import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer-navigation',
  templateUrl: './footer-navigation.component.html',
  styleUrls: ['./footer-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
