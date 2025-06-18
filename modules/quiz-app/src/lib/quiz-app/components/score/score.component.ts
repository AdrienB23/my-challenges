import { Component, Inject } from '@angular/core';
import { QuizAppText } from '../../../../../../../libs/shared/models/quiz/quiz-app-text';
import { DataQuizApp } from '../../../../../../../libs/shared/models/quiz/data-quiz-app';
import { ThemeEnum } from '../../../../../../../libs/shared/models/quiz/theme-enum';
import { PageStateEnum } from '../../../../../../../libs/shared/models/quiz/page-state-enum';

@Component({
  selector: 'lib-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css', '../../quiz-app.component.css'],
})
export class ScoreComponent {
  constructor(
    @Inject('quizText') public quizText: QuizAppText,
    @Inject('quizData') public quizData: DataQuizApp,
    @Inject('isDark') public isDark: boolean,
    @Inject('themeSelected') public themeSelected: undefined | ThemeEnum,
    @Inject('score') public score: number,
    @Inject('themeIndex') public themeIndex: number,
    @Inject('onPlaySelected') public onPlaySelected: () => void,
  ) {}

  protected readonly PageStateEnum = PageStateEnum;
}
