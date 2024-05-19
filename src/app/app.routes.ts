import { Route } from '@angular/router';
import { ChallengesComponent, NewsletterSignUpComponent } from '@my-challenges/challenges';

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
        path: 'challenges/newsletter',
        title: 'Newsletter sign-up',
        component: NewsletterSignUpComponent,
      }
];
