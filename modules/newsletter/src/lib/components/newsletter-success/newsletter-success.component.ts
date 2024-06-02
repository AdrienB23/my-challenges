import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { NewsletterService } from '../../../../../../libs/shared/services/newsletter.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Success } from '../../../../../../libs/shared/models/success';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-newsletter-success',
  templateUrl: './newsletter-success.component.html',
  styleUrl: './newsletter-success.component.css',
})
export class NewsletterSuccessComponent implements OnInit {
  success!: Success;

  constructor(private newsletterService: NewsletterService, private router: Router) {
  }

  ngOnInit() {
    this.getSuccess();
  }

  getSuccess() {
    this.success = this.newsletterService.getSuccess();
  }

  dismiss() {
    this.newsletterService.setSubmitted(false);
    this.router.navigate(['/newsletter/sign-up']);
  }
}
