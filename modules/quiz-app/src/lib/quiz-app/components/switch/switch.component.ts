import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
})
export class SwitchComponent {
  @Input() isDark = false;
  @Output() isDarkChange = new EventEmitter<boolean>();

  toggleDarkMode() {
    this.isDark = !this.isDark;
    this.isDarkChange.emit(this.isDark);
  }
}
