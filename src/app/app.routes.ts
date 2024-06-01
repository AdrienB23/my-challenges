import { Route } from '@angular/router';
import {
  ArticlePreviewComponent,
  ChallengesComponent,
  NewsletterComponent,
  NewsletterSignUpComponent,
  NewsletterSuccessComponent,
  FormGuard
} from '@my-challenges/challenges';

    export const appRoutes: Route[] = [{
        path:'',
        redirectTo: '/challenges',
        pathMatch: 'full'
      }, {
        path: 'challenges',
        title: 'My challenges',
        component: ChallengesComponent
      }, {
        path: 'articles',
        title: 'Articles Preview',
        component: ArticlePreviewComponent,
      }, {
        path: 'newsletter',
        title: 'Newsletter',
        component: NewsletterComponent,
          children: [{
              path: 'sign-up',
              title: 'Newsletter sign-up',
              component: NewsletterSignUpComponent,
            }, {
            path: 'success',
            title: 'Newsletter success',
            component: NewsletterSuccessComponent,
            canActivate: [FormGuard]
          }]
      }]
