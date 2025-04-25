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

  questionsData!: {
    question: string;
    options: string[];
    answer: string;
  };

  constructor(
    @Inject('quizText') public quizText: QuizAppText,
    @Inject('quizData') public quizData: DataQuizApp,
    @Inject('isDark') public isDark: boolean,
    @Inject('themeSelected') public themeSelected: undefined | ThemeEnum,
    @Inject('selectedAnswer') public selectedAnswer: string | null,
    @Inject('questionNumber') public questionNumber: number,
    @Inject('answerSubmitted') public answerSubmitted: boolean,
    @Inject('score') public score: number,
    @Inject('onSubmittedAnswer')
    public onSubmittedAnswer: (newScore: number) => void,
    @Inject('onAnswerSelected')
    public onAnswerSelected: (answer: string | null) => void,
    @Inject('onNextQuestion')
    public onNextQuestion: (newQuestionNumber: number) => void,
  ) {
    if (themeSelected != undefined) {
      this.questionsData =
        quizData.quizzes[themeSelected].questions[questionNumber - 1];
    }
  }

  selectAnswer(answer: string) {
    if (!this.answerSubmitted) {
      if (this.selectedAnswer === answer) {
        this.selectedAnswer = null;
        this.onAnswerSelected(null);
      } else {
        this.selectedAnswer = answer;
        this.onAnswerSelected(answer);
      }
    }
  }

  submitAnswer() {
    if (this.selectedAnswer) {
      this.answerSubmitted = true;
      if (this.selectedAnswer === this.questionsData.answer) {
        this.score ++;
      }
      this.onSubmittedAnswer(this.score);
    }
  }

  nextQuestion() {
    this.answerSubmitted = false;
    this.selectedAnswer = null;
    if (this.questionNumber < 10) {
      this.questionNumber ++;
    }
    this.onNextQuestion(this.questionNumber);
  }
}
