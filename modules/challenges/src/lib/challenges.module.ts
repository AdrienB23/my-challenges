import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesComponent } from './challenges/challenges.component';
import { NewsletterSignUpComponent } from './newsletter-sign-up/newsletter-sign-up.component';

@NgModule({
  declarations: [
    ChallengesComponent,
    NewsletterSignUpComponent,
  ],
  exports: [
    NewsletterSignUpComponent
  ],
  imports: [CommonModule],
})
export class ChallengesModule {}
