import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroNavbarComponent } from './core/components/navbar/navbar-cadastro/navbar-cadastro.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { CadastroComponent } from './features/cadastro/cadastro.component';
import { HomeComponent } from './features/home-page/home.component';
import { CadastroFormComponent } from './features/cadastro/components/cadastro-form/cadastro-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarHomeComponent } from './core/components/navbar/navbar-home/navbar-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroNavbarComponent,
    NavbarHomeComponent,
    FooterComponent,
    CadastroComponent,
    HomeComponent,
    CadastroFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
