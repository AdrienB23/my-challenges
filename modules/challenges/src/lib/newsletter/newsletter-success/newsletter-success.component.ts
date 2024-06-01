import { Component, OnInit } from '@angular/core';
import { NewsletterService } from '../services/newsletter.service';
import { Success } from './success';
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
    this.newsletterService.setFormData(false);
    this.router.navigate(['/newsletter/sign-up']);
  }
}
