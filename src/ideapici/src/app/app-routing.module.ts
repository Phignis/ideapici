import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnknownPageComponent } from './unknown-page/unknown-page.component';

const routes: Routes = [
  {path: "**", component: UnknownPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
