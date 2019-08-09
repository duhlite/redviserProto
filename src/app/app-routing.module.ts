import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutProgramComponent } from "./about-program/about-program.component";

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full' },
  {path: 'about', component: AboutProgramComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
