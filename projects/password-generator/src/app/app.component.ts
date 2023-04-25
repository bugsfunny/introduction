import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  message = 'Cliquez sur le bouton "Générez"';
  length = 20;
  uppercase = false;
  numbers = false;
  symbols = false;

  availableSymbols = '!@#$%&*()_+-=[]{}<,.>?';
  alphabet = 'abcdefghijklmnopqrstuvwxyz';

  generate() {
    this.message = 'MON_MOT_DE_PASSE';
  }

  changeLength(event: Event) {
    this.length = +(event.target as HTMLInputElement).value;
  }

  changeSetting(settingName: string, settingValue: boolean) {
    if (
      settingName !== 'uppercase' &&
      settingName !== 'numbers' &&
      settingName !== 'symbols'
    ) {
      return;
    }
    this[settingName] = settingValue;
  }
}
