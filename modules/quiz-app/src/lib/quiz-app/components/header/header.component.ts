import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageStateEnum } from '../../../../../../../libs/shared/models/quiz/page-state-enum';
import { QuizAppText } from '../../../../../../../libs/shared/models/quiz/quiz-app-text';
import { DataQuizApp } from '../../../../../../../libs/shared/models/quiz/data-quiz-app';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../quiz-app.component.css'],
})
export class HeaderComponent {
  @Input() quizData!: DataQuizApp;
  @Input() quizText!: QuizAppText;
  @Input() isDark = false;
  @Input() pageState!: PageStateEnum;
  @Input() themeIndex!: number;
  @Output() isDarkChange = new EventEmitter<boolean>();

  toggleDarkMode() {
    this.isDark = !this.isDark;
    this.isDarkChange.emit(this.isDark);
  }

  protected readonly PageStateEnum = PageStateEnum;
}
