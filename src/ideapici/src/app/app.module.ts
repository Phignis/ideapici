import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SetupChoiceComponent } from './pages/setup-choice/setup-choice.component';
import { ShareButtonComponent } from './components/share-button/share-button.component';
import { SharingLinkButtonComponent } from './components/sharing-link-button/sharing-link-button.component';
import { PerformanceCardComponent } from './components/performance-card/performance-card.component';
import { PerformanceInfoComponent } from './components/performance-info/performance-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    SetupChoiceComponent,
    ShareButtonComponent,
    SharingLinkButtonComponent,
    PerformanceCardComponent,
    PerformanceInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
