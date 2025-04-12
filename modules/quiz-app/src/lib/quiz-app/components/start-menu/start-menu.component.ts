import { Component, Inject } from '@angular/core';
import { QuizAppText } from '../../../../../../../libs/shared/models/quiz/quiz-app-text';
import { DataQuizApp } from '../../../../../../../libs/shared/models/quiz/data-quiz-app';
import { ThemeEnum } from '../../../../../../../libs/shared/models/quiz/theme-enum';

@Component({
  selector: 'lib-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css', '../../quiz-app.component.css'],
})
export class StartMenuComponent {
  constructor(
    @Inject('quizText') public quizText: QuizAppText,
    @Inject('quizData') public quizData: DataQuizApp,
    @Inject('isDark') public isDark: boolean,
    @Inject('themeSelected') public themeSelected: undefined | ThemeEnum,
    @Inject('onThemeSelected') public onThemeSelected: (theme: string) => void
  ) {}

  protected readonly ThemeEnum = ThemeEnum;
}
