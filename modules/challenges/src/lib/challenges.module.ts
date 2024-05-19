import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesComponent } from './challenges/challenges.component';
import { ArticlePreviewComponent } from './article-preview/article-preview.component';
import { ShareComponent } from './article-preview/share/share.component';
import { NewsletterSignUpComponent } from './newsletter-sign-up/newsletter-sign-up.component';

@NgModule({
  declarations: [
    ArticlePreviewComponent,
    ShareComponent,
    ChallengesComponent,
    ArticlePreviewComponent,
    ShareComponent,
    NewsletterSignUpComponent,
  ],
  exports: [
    ArticlePreviewComponent,
    ShareComponent,
    NewsletterSignUpComponent
  ],
  imports: [CommonModule],
})
export class ChallengesModule {}
