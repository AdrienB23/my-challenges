import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterModule, RouterOutlet, withHashLocation } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ArticlePreviewModule } from '@my-challenges/article-preview';
import { TimeTrackingModule } from '@my-challenges/time-tracking';
import { NewsletterModule } from '@my-challenges/newsletter';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(appRoutes),
    ArticlePreviewModule,
    NewsletterModule,
    TimeTrackingModule,
  ],
  providers: [
    provideRouter(appRoutes, withHashLocation()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
