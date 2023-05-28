import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SetupChoiceComponent } from './pages/setup-choice/setup-choice.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
const routes: Routes = [
  // TODO : substitute NotFoundPageComponent with landing page
  {path: "", component: LandingPageComponent},
  {path: "index", component: LandingPageComponent},
  {path: "setupChoice", component: SetupChoiceComponent},
  {path: "**", component: NotFoundPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
