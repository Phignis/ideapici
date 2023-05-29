import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SetupChoiceComponent } from './pages/setup-choice/setup-choice.component';
import { ConfigVisualisationPageComponent } from './pages/config-visualisation-page/config-visualisation-page.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "index", component: LandingPageComponent},
  {path: "questions-page", component: QuestionsPageComponent},
  {path: "setup-choice", component: SetupChoiceComponent},
  {path: "config-visualisation", component: ConfigVisualisationPageComponent},
  {path: "**", component: NotFoundPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
