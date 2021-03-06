import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScreenHomeComponent} from './screens/screen-home/screen-home.component';
import {Screen404Component} from './screens/screen404/screen404.component';
import {ScreenQuoteCardComponent} from './screens/screen-quote-card/screen-quote-card.component';
import {ScreenFooterNavigationComponent} from './screens/screen-footer-navigation/screen-footer-navigation.component';
import {ScreenSliderComponent} from './screens/screen-slider/screen-slider.component';


const routes: Routes = [
  {
    path: 'info-slider',
    component: ScreenSliderComponent
  },
  {
    path: 'footer-navigation',
    component: ScreenFooterNavigationComponent
  },
  {
    path: 'quote-card',
    component: ScreenQuoteCardComponent
  },
  {
    path: 'home',
    component: ScreenHomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Screen404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
