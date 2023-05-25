import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MainIconButtonComponent } from './components/main-icon-button/main-icon-button.component';
import { PeopleProfileIconComponent } from './components/icons/people-profile-icon/people-profile-icon.component';
import { PeopleIncriptionAddIconComponent } from './components/icons/people-incription-add-icon/people-incription-add-icon.component';
import { HeaderComponent } from './components/header/header.component';
import { SVGComponentComponent } from './components/icons/svgcomponent/svgcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    MainIconButtonComponent,
    PeopleProfileIconComponent,
    PeopleIncriptionAddIconComponent,
    HeaderComponent,
    SVGComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
