import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '../newsletter-sign-up/form';
import { Success } from '../newsletter-success/success';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private newsletterUrl = 'assets/data/newsletter.json';

  constructor(private http: HttpClient) { }

  getForm(): Form {
    const form: Form = {title: "", stats: "", updates: [], subscribe: "", email: "", error: "", example: ""};
    this.http.get(this.newsletterUrl).subscribe(
      data => {
        form.title = (data as any).form.title;
        form.stats = (data as any).form.stats;
        form.updates = (data as any).form.updates;
        form.subscribe = (data as any).form.subscribe;
        form.email = (data as any).form.email;
        form.error = (data as any).form.error;
        form.example = (data as any).form.example;
      }
    );
    return form;
  }

  getSuccess(): Success {
    const success: Success =  {title: "", confirmation1: "", confirmation2: "", dismiss: ""};
    this.http.get(this.newsletterUrl).subscribe(
      data => {
        success.title = (data as any).success.title;
        success.confirmation1 = (data as any).success.confirmation1;
        success.confirmation2 = (data as any).success.confirmation2;
        success.dismiss = (data as any).success.dismiss;
      }
    );
    return success;
  }

  getSubmitted(): boolean {
    return Boolean(localStorage.getItem('submitted'));
  }

  setFormData(submitted: boolean){
    localStorage.setItem('submitted', submitted.toString());
  }
}
