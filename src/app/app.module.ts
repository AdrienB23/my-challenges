import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ChallengesComponent } from './challenges/challenges.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChallengesModule } from '@my-challenges/challenges';

@NgModule({
  declarations: [
    AppComponent,
    ChallengesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(appRoutes),
    ChallengesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
