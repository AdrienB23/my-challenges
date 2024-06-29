import { Route } from '@angular/router';
import { ChallengesComponent } from '@my-challenges/challenges';
import { ArticlePreviewComponent } from '@my-challenges/article-preview';
import {
  NewsletterComponent,
  NewsletterSignUpComponent,
  NewsletterSuccessComponent
} from '@my-challenges/newsletter';
import { NewsletterFormGuardService } from '../../libs/shared/services/newsletter-form-guard.service';
import { TimeTrackingComponent } from '@my-challenges/time-tracking';

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
            canActivate: [NewsletterFormGuardService]
          }]
      }, {
        path: 'time/:language',
        title: 'Time Tracking',
        component: TimeTrackingComponent,
      }
]
