import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { NewsletterForm } from '../../../../../../libs/shared/models/newsletter-form';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { NewsletterService } from '../../../../../../libs/shared/services/newsletter.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-newsletter-sign-up',
  templateUrl: './newsletter-sign-up.component.html',
  styleUrl: './newsletter-sign-up.component.css',
})
export class NewsletterSignUpComponent implements OnInit{
  form!: NewsletterForm;
  screenHeight!: number;
  screenWidth!: number;
  mobile = false;
  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]) ,
  });
  isFormValid = true;

  constructor(private newsletterService: NewsletterService, private router: Router) {
    this.getScreenSize();
  }


  ngOnInit() {
    this.newsletterService.setSubmitted(false);
    this.getForm();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.mobile = this.screenWidth <= 850;
  }

  getForm() {
    this.form = this.newsletterService.getForm();
  }

  illustrationImage(): string {
    return this.mobile ? 'assets/images/newsletter/illustration-sign-up-mobile.svg' : 'assets/images/newsletter/illustration-sign-up-desktop.svg';
  }

  emailUpdate() {
    console.log("update : " + this.newsletterService.getSubmitted());
    this.isFormValid = this.emailForm.valid;
  }

  submit() {
    this.isFormValid = this.emailForm.valid;
    if (this.isFormValid) {
      this.newsletterService.setSubmitted(true);
      this.router.navigate(['/newsletter/success']);
    } else {
      this.newsletterService.setSubmitted(false);
    }
  }

  get email() {
    return this.emailForm.get('email');
  }
}
