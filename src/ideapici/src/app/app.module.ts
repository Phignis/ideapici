import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SetupChoiceComponent } from './pages/setup-choice/setup-choice.component';
import { PcCardComponent } from './components/pc-card/pc-card.component';
import { TextcomboboxComponent } from './components/textcombobox/textcombobox.component';
import { TextSliderComponent } from './components/text-slider/text-slider.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';
import { QuestionCardsComponent } from './components/question-cards/question-cards.component';
import { QuestionIndicatorComponent } from './components/question-indicator/question-indicator.component';
import { HttpClientModule } from '@angular/common/http';


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
    QuestionIndicatorComponent
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
