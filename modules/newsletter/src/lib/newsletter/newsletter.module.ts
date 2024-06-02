import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter.component'
import { NewsletterSignUpComponent } from '../components/newsletter-sign-up/newsletter-sign-up.component';
import { NewsletterSuccessComponent } from '../components/newsletter-success/newsletter-success.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { NewsletterService } from '../../../../../libs/shared/services/newsletter.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { NewsletterFormGuardService } from '../../../../../libs/shared/services/newsletter-form-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  declarations: [
    NewsletterComponent,
    NewsletterSignUpComponent,
    NewsletterSuccessComponent
  ],
  providers: [
    NewsletterFormGuardService,
    NewsletterService,
  ]
})
export class NewsletterModule {}
