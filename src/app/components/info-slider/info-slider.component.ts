import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {InfoSliderElementComponent} from './info-slider-element/info-slider-element.component';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-info-slider',
  templateUrl: './info-slider.component.html',
  styleUrls: ['./info-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class InfoSliderComponent implements OnInit, AfterContentInit {

  @Input() pxHeight = 400;
  @Input() pxPadding = 30;
  @Input() pxMenuWidth = 100;
  @Input() activeIndex = 0;

  activeIndex$: BehaviorSubject<number> = new BehaviorSubject(0);

  @ContentChildren(InfoSliderElementComponent) elements: QueryList<InfoSliderElementComponent>;

  constructor() { }

  ngOnInit() {
    this.activeIndex$.next(this.activeIndex);
  }

  ngAfterContentInit(): void {
    this.setActive(this.activeIndex$.getValue());
  }

  setActive(index: number) {
    this.elements.find( ((item, index1) => this.activeIndex$.getValue() === index1 )).setActiveState(false);
    this.activeIndex$.next(index);
    this.elements.find( ((item, index1) => index === index1 )).setActiveState(true);
  }
}
