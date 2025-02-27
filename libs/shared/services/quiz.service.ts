import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataQuizApp } from '../models/data-quiz-app';
import { QuizAppText } from '../models/quiz-app-text';

const dataUrl = 'assets/data/';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getTrad(language: string): QuizAppText {
    const quizAppText: QuizAppText = {
      title1: "",
      title2: "",
      subject: "",
      html: "",
      css: "",
      js: "",
      accessibility: "",
      question: "",
      of: "",
      submit: "",
      complete: "",
      score: "",
      out_of: "",
      play: "",
    }

    this.http.get(dataUrl + "quiz-trad.json")
      .subscribe({
        next: (data: any)  => {
          quizAppText.title1 = data[language].title1;
          quizAppText.title2 = data[language].title2;
          quizAppText.subject = data[language].subject;
          quizAppText.html = data[language].html;
          quizAppText.css = data[language].css;
          quizAppText.js = data[language].js;
          quizAppText.accessibility = data[language].accessibility;
          quizAppText.question = data[language].question;
          quizAppText.of = data[language].of;
          quizAppText.submit = data[language].submit;
          quizAppText.complete = data[language].complete;
          quizAppText.score = data[language].score;
          quizAppText.out_of = data[language].out_of;
          quizAppText.play = data[language].play;
        },
        error: err => {
          console.log(err);
          return err;
        }
      })
    return quizAppText;
  }

  getData(): Observable<DataQuizApp> {
    return this.http.get<DataQuizApp>(dataUrl + "quiz-data.json");
  }
}
