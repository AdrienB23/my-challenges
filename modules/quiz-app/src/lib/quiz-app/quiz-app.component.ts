import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { QuizService } from '../../../../../libs/shared/services/quiz.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { QuizAppText } from '../../../../../libs/shared/models/quiz-app-text';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { DataQuizApp } from '../../../../../libs/shared/models/data-quiz-app';

@Component({
  selector: 'lib-quiz-app',
  standalone: false,
  templateUrl: './quiz-app.component.html',
  styleUrl: './quiz-app.component.css',
})
export class QuizAppComponent implements OnInit {
  quizText!: QuizAppText;
  questions!: DataQuizApp;
  isDark!: boolean;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.getText();
    this.getQuestions();
  }

  getText() {
    this.quizService.getTrad().subscribe(
      data => {
        data.forEach(text =>  {
          if (text.language === "en") {
            this.quizText = text;
          }
        });
        console.log(this.quizText);
      }
    )
  }

  getQuestions() {
    this.quizService.getData().subscribe(
      data => {
        this.questions = data;
        console.log("Raw data:", data);
      }
    )
  }
}
