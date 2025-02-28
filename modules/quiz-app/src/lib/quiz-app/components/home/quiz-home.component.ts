import { Component, EventEmitter, Input, Output } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { QuizAppText } from '../../../../../../../libs/shared/models/quiz-app-text';

@Component({
  selector: 'lib-quiz-home',
  standalone: false,
  templateUrl: './quiz-home.component.html',
  styleUrls: ['./quiz-home.component.css', '../../quiz-app.component.css'],
})
export class QuizHomeComponent {
  @Input() quizText!: QuizAppText;


}
