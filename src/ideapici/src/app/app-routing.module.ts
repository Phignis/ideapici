import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SetupChoiceComponent } from './pages/setup-choice/setup-choice.component';
import { QuestionsPageComponent } from './pages/questions-page/questions-page.component';

const routes: Routes = [

  // TODO : substitute NotFoundPageComponent with landing page
  {path: "index", component: NotFoundPageComponent},
  {path: "questions-page", component: QuestionsPageComponent},
  {path: "setup-choice", component: SetupChoiceComponent},
  {path: "**", component: NotFoundPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
