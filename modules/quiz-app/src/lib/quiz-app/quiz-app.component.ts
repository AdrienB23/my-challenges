import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { QuizService } from '../../../../../libs/shared/services/quiz.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { QuizAppText } from '../../../../../libs/shared/models/quiz-app-text';

@Component({
  selector: 'lib-quiz-app',
  standalone: false,
  templateUrl: './quiz-app.component.html',
  styleUrl: './quiz-app.component.css',
})
export class QuizAppComponent implements OnInit {
  quizText!: QuizAppText;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizText = this.quizService.getTrad("en");
  }
}
