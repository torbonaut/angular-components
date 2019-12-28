import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-info-slider-element',
  templateUrl: './info-slider-element.component.html',
  styleUrls: ['./info-slider-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class InfoSliderElementComponent implements OnInit {

  @Input() icon: string;
  @Input() label: string;

  @HostBinding('class.active') activeState = false;

  constructor() { }

  ngOnInit() {}

  public setActiveState(state: boolean) {
    this.activeState = state;
  }

}
