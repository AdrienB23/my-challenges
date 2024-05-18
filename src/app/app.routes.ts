import { Route } from '@angular/router';
import { ArticlePreviewComponent, ChallengesComponent } from '@my-challenges/challenges';

    export const appRoutes: Route[] = [
  {
    path: '',
    component: ChallengesComponent,
  },
  {
    path: 'articles',
    component: ArticlePreviewComponent,
  },
];
