import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizAppComponent } from './quiz-app.component';
import { QuizHomeComponent } from './components/home/quiz-home.component';
import { RouterOutlet } from '@angular/router';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SwitchComponent } from './components/switch/switch.component';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { Button, ButtonDirective } from 'primeng/button';

@NgModule({
  declarations: [QuizAppComponent, QuizHomeComponent, SwitchComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    InputSwitchModule,
    FormsModule,
    SliderModule,
    Button,
    ButtonDirective,
  ],
})
export class QuizAppModule {}
