import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalculatorTrad } from '../models/calculator-trad';

const dataUrl = 'assets/data/';

@Injectable({
  providedIn: 'root'
})
export class CalculatorTradService {

  constructor(private http: HttpClient) {}

  getTrad(language: string): CalculatorTrad {
    const calculatorTrad: CalculatorTrad = {
      bill: "",
      select: "",
      custom: "",
      number: "",
      tip: "",
      person: "",
      total: "",
      reset: ""
    }
    this.http.get(dataUrl + "calculator-trad.json")
      .subscribe({
        next: (data: any)  => {
          calculatorTrad.bill = data[language].bill;
          calculatorTrad.select = data[language].select;
          calculatorTrad.custom = data[language].custom;
          calculatorTrad.number = data[language].number;
          calculatorTrad.tip = data[language].tip;
          calculatorTrad.person = data[language].person;
          calculatorTrad.total = data[language].total;
          calculatorTrad.reset = data[language].reset;
        },
        error: err => {
          console.log(err);
          return err;
        }
      })
    return calculatorTrad;
  }
}
