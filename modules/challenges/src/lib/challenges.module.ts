import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesComponent } from './challenges/challenges.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [ChallengesComponent],
  imports: [
    CommonModule,
    RouterOutlet
  ],
})
export class ChallengesModule {}
