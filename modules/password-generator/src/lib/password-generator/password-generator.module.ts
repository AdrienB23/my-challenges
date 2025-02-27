import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordGeneratorComponent } from './password-generator.component';
import { SliderModule } from 'primeng/slider';
import { CheckboxModule } from 'primeng/checkbox';
import { Button, ButtonDirective } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';


@NgModule({
  declarations: [PasswordGeneratorComponent],
  imports: [
    CommonModule,
    SliderModule,
    CheckboxModule,
    Button,
    FormsModule,
    InputTextModule,
    InputGroupModule,
    ButtonDirective,
  ],
})
export class PasswordGeneratorModule {}
