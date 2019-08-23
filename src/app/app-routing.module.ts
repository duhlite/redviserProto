import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutProgramComponent } from "./about-program/about-program.component";
import { AboutFoundersComponent } from './about-founders/about-founders.component';
import { LoginComponent } from './header/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/team', pathMatch: 'full' },
  { path: 'about', component: AboutProgramComponent },
  { path: 'team', component: AboutFoundersComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
