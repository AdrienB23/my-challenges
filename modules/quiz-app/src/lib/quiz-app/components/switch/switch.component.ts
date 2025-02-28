import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-switch',
  standalone: false,
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
})
export class SwitchComponent {
  @Input() isDarkMode = false;
  @Output() isDarkModeChange = new EventEmitter<boolean>();

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.isDarkModeChange.emit(this.isDarkMode);
  }
}
