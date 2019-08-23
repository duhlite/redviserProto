import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { ModalModule } from "./_modal";
import { AppRoutingModule } from './app-routing.module';
import { fakeBackendProvider } from "./_helpers/fake-backend";
import { JwtInterceptor } from "./_helpers/jwt.interceptor";
import { ErrorInterceptor } from "./_helpers/error.interceptor";

import { AlertComponent } from "./_components/alert.component";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TermsComponent } from './footer/terms/terms.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { AboutProgramComponent } from './about-program/about-program.component';
import { AboutFoundersComponent } from './about-founders/about-founders.component';
import { ContactComponent } from './contact/contact.component';
import { StoreContactComponent } from './header/store-contact/store-contact.component';
import { LoginComponent } from './header/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TermsComponent,
    PrivacyComponent,
    AboutProgramComponent,
    AboutFoundersComponent,
    ContactComponent,
    StoreContactComponent,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
