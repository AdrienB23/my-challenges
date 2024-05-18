import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterModule, RouterOutlet, withHashLocation } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
  ],
  providers: [
    provideRouter(appRoutes, withHashLocation())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
