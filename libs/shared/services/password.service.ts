import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Password } from '../models/password';

const dataUrl = 'assets/data/';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  constructor(private http: HttpClient) {}

  getTrad(language: string): Password {
    const passwordTexts: Password = {
      title: "",
      characters: "",
      types: [],
      strength: "",
      generate: ""
    }
    this.http.get(dataUrl + "password-trad.json")
      .subscribe({
        next: (data: any)  => {
          passwordTexts.title = data[language].title;
          passwordTexts.characters = data[language].characters;
          passwordTexts.types = data[language].types;
          passwordTexts.strength = data[language].strength;
          passwordTexts.generate = data[language].generate;
        },
        error: err => {
          console.log(err);
          return err;
        }
      })
    return passwordTexts;
  }
}
