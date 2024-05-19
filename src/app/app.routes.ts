import { Route } from '@angular/router';
import { ArticlePreviewComponent, ChallengesComponent, NewsletterSignUpComponent } from '@my-challenges/challenges';

    export const appRoutes: Route[] = [
      {
        path:'',
        redirectTo: '/challenges',
        pathMatch: 'full'
      },
      {
        path: 'challenges',
        component: ChallengesComponent,
        title: 'My Challenges'
      },
      {
        path: 'challenges/articles',
        title: 'Articles Preview',
        component: ArticlePreviewComponent,
      },
      {
        path: 'challenges/newsletter',
        title: 'Newsletter sign-up',
        component: NewsletterSignUpComponent,
      }
];
