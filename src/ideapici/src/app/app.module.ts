import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainIconButtonComponent } from './components/UI/main-icon-button/main-icon-button.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PeopleProfileIconComponent } from './components/icons/people-profile-icon/people-profile-icon.component';
import { PeopleIncriptionAddIconComponent } from './components/icons/people-incription-add-icon/people-incription-add-icon.component';
import { HeaderComponent } from './components/header/header.component';
import { SVGComponentComponent } from './components/icons/svgcomponent/svgcomponent.component';
import { IdeapiciLogoSvgComponent } from './components/icons/ideapici-logo-svg/ideapici-logo-svg.component';
import { TitledIconIdeapiciComponent } from './components/titled-icon-ideapici/titled-icon-ideapici.component';
import { IdeapiciLogoSvgWiredComponent } from './components/icons/ideapici-logo-svg-wired/ideapici-logo-svg-wired.component';
import { SetupChoiceComponent } from './pages/setup-choice/setup-choice.component';
import { PcCardComponent } from './components/pc-card/pc-card.component';
import { TextcomboboxComponent } from './components/textcombobox/textcombobox.component';
import { TextSliderComponent } from './components/text-slider/text-slider.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';
import { QuestionCardsComponent } from './components/question-cards/question-cards.component';
import { QuestionIndicatorComponent } from './components/question-indicator/question-indicator.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderHeroComponent } from './components/header-hero/header-hero.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { HeroButtonComponent } from './components/UI/hero-button/hero-button.component';
import { ConnexionHeroButtonComponent } from './components/UI/connexion-hero-button/connexion-hero-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    SetupChoiceComponent,
    PcCardComponent,
    QuestionsPageComponent,
    TextcomboboxComponent,
    TextSliderComponent,
    QuestionCardsComponent,
    QuestionIndicatorComponent,
    MainIconButtonComponent,
    PeopleProfileIconComponent,
    PeopleIncriptionAddIconComponent,
    HeaderComponent,
    SVGComponentComponent,
    IdeapiciLogoSvgComponent,
    TitledIconIdeapiciComponent,
    IdeapiciLogoSvgWiredComponent,
    LandingPageComponent,
    HeaderHeroComponent,
    ButtonComponent,
    HeroButtonComponent,
    ConnexionHeroButtonComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
