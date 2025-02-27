import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-challenges',
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.css',
})
export class ChallengesComponent {
  constructor(private router: Router) {}

  goTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
