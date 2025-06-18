import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataQuizApp } from '../models/quiz/data-quiz-app';
import { QuizAppText } from '../models/quiz/quiz-app-text';

const dataUrl = 'assets/data/';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getTrad(): Observable<QuizAppText[]> {
    return this.http.get<QuizAppText[]>(dataUrl + "quiz-trad.json");
  }

  getData(): Observable<DataQuizApp> {
    return this.http.get<DataQuizApp>(dataUrl + "quiz-data.json");
  }
}
