import { Injectable } from '@angular/core';
import { NewsletterService } from './newsletter.service';
import { CanActivate } from '@angular/router';

@Injectable()
export class NewsletterFormGuardService implements CanActivate {
  isSubmitted = false;

  constructor(private newsletterService: NewsletterService) {}

  canActivate() {
    this.isSubmitted = this.newsletterService.getSubmitted();
    console.log(this.isSubmitted);
    return this.isSubmitted;
  }
}
