import { Component, Inject } from '@angular/core';
import { QuizAppText } from '../../../../../../../libs/shared/models/quiz/quiz-app-text';
import { DataQuizApp } from '../../../../../../../libs/shared/models/quiz/data-quiz-app';
import { ThemeEnum } from '../../../../../../../libs/shared/models/quiz/theme-enum';

@Component({
  selector: 'lib-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css', '../../quiz-app.component.css'],
})
export class QuestionsComponent {

  questionNumber = 1;

  selectedAnswer: string | undefined;

  constructor(
    @Inject('quizText') public quizText: QuizAppText,
    @Inject('quizData') public quizData: DataQuizApp,
    @Inject('isDark') public isDark: boolean,
    @Inject('themeSelected') public themeSelected: undefined | ThemeEnum,
  ) {}

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

}
