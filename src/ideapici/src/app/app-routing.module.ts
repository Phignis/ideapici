import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SetupChoiceComponent } from './pages/setup-choice/setup-choice.component';
const routes: Routes = [
  // TODO : substitute NotFoundPageComponent with landing page
  {path: "index", component: NotFoundPageComponent},
  {path: "**", component: NotFoundPageComponent},
  {path: "setupChoise", component: SetupChoiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
