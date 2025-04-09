import { Component, Inject } from '@angular/core';
import { QuizAppText } from '../../../../../../../libs/shared/models/quiz/quiz-app-text';
import { DataQuizApp } from '../../../../../../../libs/shared/models/quiz/data-quiz-app';

@Component({
  selector: 'lib-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.css',
})
export class ScoreComponent {
  constructor(
    @Inject('quizText') public quizText: QuizAppText,
    @Inject('questions') public questions: DataQuizApp,
    @Inject('isDark') public isDark: boolean
  ) {}
}
