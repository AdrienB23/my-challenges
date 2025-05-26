import { Component, Injector, OnInit } from '@angular/core';
import { QuizService } from '../../../../../libs/shared/services/quiz.service';
import { QuizAppText } from '../../../../../libs/shared/models/quiz/quiz-app-text';
import { DataQuizApp } from '../../../../../libs/shared/models/quiz/data-quiz-app';
import { PageStateEnum } from '../../../../../libs/shared/models/quiz/page-state-enum';
import { StartMenuComponent } from './components/start-menu/start-menu.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ScoreComponent } from './components/score/score.component';
import { ThemeEnum } from '../../../../../libs/shared/models/quiz/theme-enum';

@Component({
  selector: 'lib-quiz-app',
  standalone: false,
  templateUrl: './quiz-app.component.html',
  styleUrl: './quiz-app.component.css',
})
export class QuizAppComponent implements OnInit {
  quizText!: QuizAppText;
  quizData!: DataQuizApp;
  isDark!: boolean;
  themeSelected?: ThemeEnum;
  selectedAnswer: string | null = null;
  questionNumber = 1;
  answerSubmitted!: boolean;
  score = 0;
  themeIndex!: number;

  pageState: PageStateEnum = PageStateEnum.START_MENU;
  componentMap = {
    [PageStateEnum.START_MENU]: StartMenuComponent,
    [PageStateEnum.QUESTIONS]: QuestionsComponent,
    [PageStateEnum.SCORE]: ScoreComponent
  };

  constructor(
    private quizService: QuizService,
    private injector: Injector
  ) {}

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
        this.quizData = data;
        console.log("Raw data:", data);
      }
    )
  }

  get currentComponent() {
    return this.componentMap[this.pageState];
  }

  get customInjector() {
    return Injector.create({
      providers: [
        { provide: 'quizText', useValue: this.quizText },
        { provide: 'quizData', useValue: this.quizData },
        { provide: 'isDark', useValue: this.isDark },
        { provide: 'themeSelected', useValue: this.themeSelected },
        { provide: 'selectedAnswer', useValue: this.selectedAnswer },
        { provide: 'questionNumber', useValue: this.questionNumber },
        { provide: 'answerSubmitted', useValue: this.answerSubmitted },
        { provide: 'score', useValue: this.score },
        { provide: 'themeIndex', useValue: this.themeIndex },
        { provide: 'onThemeSelected', useValue: this.onThemeSelected.bind(this) },
        { provide: 'onAnswerSelected', useValue: this.onAnswerSelected.bind(this) },
        { provide: 'onSubmittedAnswer', useValue: this.onSubmittedAnswer.bind(this) },
        { provide: 'onNextQuestion', useValue: this.onNextQuestion.bind(this) },
        { provide: 'onPlaySelected', useValue: this.onPlaySelected.bind(this) }
      ],
      parent: this.injector
    });
  }

  onThemeSelected(theme: string) {
    switch (theme) {
      case 'HTML':
        this.themeSelected = ThemeEnum.HTML;
        this.themeIndex = 0;
        break;
      case 'CSS':
        this.themeSelected = ThemeEnum.CSS;
        this.themeIndex = 1;
        break;
      case 'Javascript':
        this.themeSelected = ThemeEnum.JS;
        this.themeIndex = 2;
        break;
      case 'Accessibility':
        this.themeSelected = ThemeEnum.ACCESSIBILITY;
        this.themeIndex = 3;
    }
    this.pageState = PageStateEnum.QUESTIONS;
  }

  onAnswerSelected(answer: string | null) {
    this.selectedAnswer = answer;
  }

  onSubmittedAnswer(newScore: number) {
    this.score = newScore;
    this.answerSubmitted = true;
  }

  onNextQuestion(newQuestionNumber: number) {
    this.answerSubmitted = false;
    this.selectedAnswer = null;
    if (this.questionNumber === 10) {
      this.questionNumber = 1;
      this.pageState = PageStateEnum.SCORE;
    }
    else {
      this.questionNumber = newQuestionNumber;
    }
  }

  onPlaySelected() {
    this.pageState = PageStateEnum.START_MENU;
    this.score = 0;
  }

  protected readonly PageStateEnum = PageStateEnum;
}
