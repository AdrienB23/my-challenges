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

  constructor(
    @Inject('quizText') public quizText: QuizAppText,
    @Inject('quizData') public quizData: DataQuizApp,
    @Inject('isDark') public isDark: boolean,
    @Inject('themeSelected') public themeSelected: undefined | ThemeEnum,
    @Inject('selectedAnswer') public selectedAnswer: string | null,
    @Inject('onAnswerSelected') public onAnswerSelected: (answer: string | null) => void,
    @Inject('questionNumber') public questionNumber: number,
    @Inject('onSubmittedAnswer') public onSubmittedAnswer: (newQuestionNumber: number) => void,
  ) {}

  selectAnswer(answer: string) {
    if (this.selectedAnswer === answer) {
      this.selectedAnswer = null;
      this.onAnswerSelected(null);
    } else {
      this.selectedAnswer = answer;
      this.onAnswerSelected(answer);
    }
  }

}
