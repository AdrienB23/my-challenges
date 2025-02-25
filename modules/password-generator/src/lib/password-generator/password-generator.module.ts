import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordGeneratorComponent } from './password-generator.component';
import { SliderModule } from 'primeng/slider';
import { CheckboxModule } from 'primeng/checkbox';
import { Button } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [PasswordGeneratorComponent],
  imports: [
    CommonModule,
    SliderModule,
    CheckboxModule,
    Button,
    FormsModule,
    InputTextModule,
  ],
})
export class PasswordGeneratorModule {}
