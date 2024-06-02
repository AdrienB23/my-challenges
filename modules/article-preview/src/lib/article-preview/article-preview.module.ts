import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePreviewComponent } from './article-preview.component';
import { ShareComponent } from '../components/share/share.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ArticlePreviewComponent,
    ShareComponent,
  ]
})
export class ArticlePreviewModule {}
