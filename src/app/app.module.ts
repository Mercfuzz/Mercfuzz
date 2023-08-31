import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './features/home-page/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RenderObjectsService } from './features/home-page/services/render-objects.service';
import { PresentationNavComponent } from './features/home-page/components/presentation-nav/presentation-nav.component';
import { SidebarComponent } from './features/home-page/components/sidebar/sidebar.component';
import { PresentationComponent } from './features/home-page/components/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    PresentationNavComponent,
    SidebarComponent,
    PresentationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RenderObjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
