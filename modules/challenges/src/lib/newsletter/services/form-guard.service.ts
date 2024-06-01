import { Injectable } from '@angular/core';
import {
  CanActivate,
} from '@angular/router';
import { NewsletterSignUpComponent } from '../newsletter-sign-up/newsletter-sign-up.component';
import { NewsletterService } from './newsletter.service';

@Injectable()
export class FormGuard implements CanActivate {
  isSubmitted = false;

  constructor(private newsletterService: NewsletterService) {
  }

  canActivate() {
    this.isSubmitted = this.newsletterService.getSubmitted();
    console.log(this.isSubmitted);
    return this.isSubmitted;
  }
  /*constructor(
    private newsletterComponent: NewsletterSignUpComponent
  ) {}*/

  /*canActivate() {
    console.log(this.newsletterComponent.emailForm);
    console.log(this.newsletterComponent.emailForm.valid);
    return this.newsletterComponent.emailForm.valid;
  }*/
}
