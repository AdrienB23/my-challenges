import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [CommonModule, InputNumberModule, InputTextModule, CheckboxModule],
  declarations: [CalculatorComponent],
})
export class CalculatorModule {}
