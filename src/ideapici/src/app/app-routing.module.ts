import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SetupChoiceComponent } from './pages/setup-choice/setup-choice.component';
import { ConfigVisualisationPageComponent } from './pages/config-visualisation-page/config-visualisation-page.component';

const routes: Routes = [
  {path: "setupChoise", component: SetupChoiceComponent},
  {path: "config-visualisation", component: ConfigVisualisationPageComponent},
  {path: "**", component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
