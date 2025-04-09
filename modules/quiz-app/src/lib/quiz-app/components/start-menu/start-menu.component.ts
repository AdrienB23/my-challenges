import { Component, Inject } from '@angular/core';
import { QuizAppText } from '../../../../../../../libs/shared/models/quiz/quiz-app-text';
import { DataQuizApp } from '../../../../../../../libs/shared/models/quiz/data-quiz-app';
import { ThemeEnum } from '../../../../../../../libs/shared/models/quiz/theme-enum';
import { PageStateEnum } from '../../../../../../../libs/shared/models/quiz/page-state-enum';

@Component({
  selector: 'lib-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css', '../../quiz-app.component.css'],
})
export class StartMenuComponent {
  constructor(
    @Inject('quizText') public quizText: QuizAppText,
    @Inject('questions') public questions: DataQuizApp,
    @Inject('isDark') public isDark: boolean,
    @Inject('themeSelected') public themeSelected: undefined | ThemeEnum,
    @Inject('pageState') public pageState: PageStateEnum
  ) {}

  onThemeSelected(theme: string) {
    switch (theme) {
      case 'HTML':
        this.themeSelected = ThemeEnum.HTML;
        break;
      case 'CSS':
        this.themeSelected = ThemeEnum.CSS;
        break;
      case 'Javascript':
        this.themeSelected = ThemeEnum.JS;
        break;
      case 'Accessibility':
        this.themeSelected = ThemeEnum.ACCESSIBILITY;
    }
    this.pageState = PageStateEnum.QUESTIONS;
  }

  protected readonly ThemeEnum = ThemeEnum;
}
