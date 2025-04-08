import { Component, Input } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { QuizAppText } from '../../../../../../../libs/shared/models/quiz-app-text';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { DataQuizApp } from '../../../../../../../libs/shared/models/data-quiz-app';

@Component({
  selector: 'lib-quiz-home',
  standalone: false,
  templateUrl: './quiz-home.component.html',
  styleUrls: ['./quiz-home.component.css', '../../quiz-app.component.css'],
})
export class QuizHomeComponent {
  @Input() quizText!: QuizAppText;
  @Input() questions!: DataQuizApp;
  @Input() isDark!: boolean;
}
