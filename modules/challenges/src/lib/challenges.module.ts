import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesComponent } from './challenges/challenges.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { ShareComponent } from './article-preview/share/share.component';
import { NewsletterSignUpComponent } from './newsletter/newsletter-sign-up/newsletter-sign-up.component';
import { NewsletterSuccessComponent } from './newsletter/newsletter-success/newsletter-success.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsletterComponent } from './newsletter/newsletter/newsletter.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    ChallengesComponent,
    ArticlePreviewComponent,
    ShareComponent,
    NewsletterSignUpComponent,
    NewsletterSuccessComponent,
    NewsletterComponent
  ],
  exports: [
    ArticlePreviewComponent,
    ShareComponent,
    NewsletterSignUpComponent,
    NewsletterSuccessComponent,
    NewsletterComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet]
})
export class ChallengesModule {}
