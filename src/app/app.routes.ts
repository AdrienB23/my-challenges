import { Route } from '@angular/router';
import { ArticlePreviewComponent, ChallengesComponent } from '@my-challenges/challenges';

    export const appRoutes: Route[] = [
  {
    path: '',
    component: ChallengesComponent,
    title: 'My Challenges',
  },
  {
    path: 'articles',
    component: ArticlePreviewComponent,
    title: 'Articles Preview',
  },
];
