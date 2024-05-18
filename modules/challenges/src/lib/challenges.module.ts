import { NgModule } from '@angular/core';
import { ArticlePreviewComponent, ShareComponent } from '@my-challenges/article-preview';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ArticlePreviewComponent,
    ShareComponent
  ],
  exports: [
    ArticlePreviewComponent,
    ShareComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ChallengesModule {}
