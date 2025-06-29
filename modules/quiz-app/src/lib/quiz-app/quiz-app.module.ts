import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizAppComponent } from './quiz-app.component';
import { RouterOutlet } from '@angular/router';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { Button, ButtonDirective } from 'primeng/button';
import { ScoreComponent } from './components/score/score.component';
import { StartMenuComponent } from './components/start-menu/start-menu.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    QuizAppComponent,
    ScoreComponent,
    StartMenuComponent,
    QuestionsComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    InputSwitchModule,
    FormsModule,
    SliderModule,
    Button,
    ButtonDirective
  ]
})
export class QuizAppModule {}
