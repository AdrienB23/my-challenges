import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizAppComponent } from './quiz-app.component';
import { RouterOutlet } from '@angular/router';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SwitchComponent } from './components/switch/switch.component';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { Button, ButtonDirective } from 'primeng/button';
import { ScoreComponent } from './components/score/score.component';
import { StartMenuComponent } from './components/start-menu/start-menu.component';
import { QuestionsComponent } from './components/questions/questions.component';

@NgModule({
  declarations: [
    QuizAppComponent,
    SwitchComponent,
    ScoreComponent,
    StartMenuComponent,
    QuestionsComponent
  ],
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
