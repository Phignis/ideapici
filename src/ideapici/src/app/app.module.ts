import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MainIconButtonComponent } from './components/main-icon-button/main-icon-button.component';
import { PeopleProfileIconComponent } from './components/icons/people-profile-icon/people-profile-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    MainIconButtonComponent,
    PeopleProfileIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
