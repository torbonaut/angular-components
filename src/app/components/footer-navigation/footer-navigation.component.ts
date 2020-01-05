import {Component, OnInit, ChangeDetectionStrategy, HostBinding} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';

export interface IMenuItem {
  title: string;
  iconURL: string;
  link?: string;
}

@Component({
  selector: 'app-footer-navigation',
  templateUrl: './footer-navigation.component.html',
  styleUrls: ['./footer-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterNavigationComponent implements OnInit {

  @HostBinding('attr.style')
  public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--active: ${this.selected$.getValue()}`);
  }

  menu: IMenuItem[] = [
    { title: 'Home', iconURL: '/assets/home-alt-regular.svg' },
    { title: 'Profile', iconURL: '/assets/user-light.svg' },
    { title: 'Settings', iconURL: '/assets/cog-light.svg' }
  ];

  selected$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  select(li: HTMLLIElement, index: number) {
    this.selected$.next(index);
    li.style.setProperty('--i', String(index));
  }

}

