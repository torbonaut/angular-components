import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterNavigationComponent } from './components/footer-navigation/footer-navigation.component';
import { QuoteCardComponent} from './components/quote-card/quote-card.component';
import { InfoSliderComponent } from './components/info-slider/info-slider.component';
import { ScreenHomeComponent } from './screens/screen-home/screen-home.component';
import { ScreenQuoteCardComponent } from './screens/screen-quote-card/screen-quote-card.component';
import { ScreenFooterNavigationComponent } from './screens/screen-footer-navigation/screen-footer-navigation.component';
import { ScreenSliderComponent } from './screens/screen-slider/screen-slider.component';
import { Screen404Component } from './screens/screen404/screen404.component';
import { InfoSliderElementComponent } from './components/info-slider/info-slider-element/info-slider-element.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterNavigationComponent,
    QuoteCardComponent,
    InfoSliderComponent,
    ScreenHomeComponent,
    ScreenQuoteCardComponent,
    ScreenFooterNavigationComponent,
    ScreenSliderComponent,
    Screen404Component,
    InfoSliderElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
