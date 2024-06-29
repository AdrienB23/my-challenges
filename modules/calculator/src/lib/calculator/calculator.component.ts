import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { CalculatorTrad } from '../../../../../libs/shared/models/calculator-trad';
import { switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CalculatorTradService } from '../../../../../libs/shared/services/calculator-trad.service';

@Component({
  selector: 'lib-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent implements OnInit {
  calculatorTrad!: CalculatorTrad
  language!: string;


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

}
