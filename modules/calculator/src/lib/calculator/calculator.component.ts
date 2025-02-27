import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { CalculatorText } from '../../../../../libs/shared/models/calculator-text';
import { switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { CalculatorTradService } from '../../../../../libs/shared/services/calculator-trad.service';
import { Nullable } from 'primeng/ts-helpers';
import { InputNumber } from 'primeng/inputnumber';

@Component({
  selector: 'lib-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent implements OnInit {
  calculatorTrad!: CalculatorText
  language!: string;
  bill = 0;
  people: number|null = 0;

  peopleError = false;
  resetDisabled = true;

  buttonPercentage: number|null = null;
  selectedPercentage: number|null = null;

  percentages = [
    5,
    10,
    15,
    25,
    50,
  ]

  tipAmount= 0.00.toFixed(2);
  total= 0.00.toFixed(2);

  constructor(
    private calculatorTradService: CalculatorTradService,
    private route: ActivatedRoute,
    ) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.language = params.get('language')!
        )
      )
      .subscribe(() => {
        this.calculatorTrad = this.calculatorTradService.getTrad(this.language);
        console.log(this.calculatorTrad);
      });
  }

  peopleChange(value: Nullable<number>):void {
    console.log(value);
    this.peopleError = false;
    if (value === undefined || value === null) {
      this.people = null;
    }
    else {
      this.people = value;
      if (value!== 0) {
        this.priceRefresh();
      }
      else {
        this.peopleError = true;
      }
    }
  }

  percentageClicked(value: number) {
    if (this.buttonPercentage === value) {
      this.buttonPercentage = null;
      this.selectedPercentage = null;

    } else {
      this.buttonPercentage = value;
      this.selectedPercentage = value;
      this.priceRefresh();
    }
  }

  customChange(value: Nullable<number>) {
    if (value) {
      this.buttonPercentage = null;
      this.selectedPercentage = value;
      this.priceRefresh();
    }
    console.log(value);
  }

  priceRefresh() {
    if (this.selectedPercentage !== null && this.people !== null && this.people !== 0) {
      const tip = this.bill * (this.selectedPercentage/100) / this.people;
      const total = (this.bill /this.people) + tip;
      this.tipAmount = tip.toFixed(2);
      this.total = total.toFixed(2);
      this.resetDisabled = false;
    }
    else {
      this.resetDisabled = true;
    }
  }

  reset(bill: InputNumber, people: InputNumber, custom: InputNumber) {

    this.tipAmount = 0.00.toFixed(2);
    this.total = 0.00.toFixed(2);
    this.bill = 0;
    this.people = 0;
    this.selectedPercentage = null;

    bill.clear();
    people.clear();
    custom.clear();

    this.resetDisabled = true;
  }

  protected readonly console = console;
}
