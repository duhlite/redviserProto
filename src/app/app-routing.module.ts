import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutProgramComponent } from "./about-program/about-program.component";
import { AboutFoundersComponent } from './about-founders/about-founders.component';
import { LoginComponent } from './header/login/login.component';
import { SplashComponent } from './splash/splash.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: SplashComponent, pathMatch: 'full' },
  { path: 'about', component: AboutProgramComponent },
  { path: 'team', component: AboutFoundersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:username', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
