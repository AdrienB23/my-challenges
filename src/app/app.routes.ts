import { Route } from '@angular/router';
import { ChallengesComponent } from './challenges/challenges.component';
import {  ArticlePreviewComponent} from '@my-challenges/article-preview';

export const appRoutes: Route[] = [
  { path: '', component: ChallengesComponent },
  { path: 'articles', component: ArticlePreviewComponent },
];
