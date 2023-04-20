import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css'],
})
export class EnfantComponent {
  @Output()
  onDecrement = new EventEmitter<string>();

  decrement() {
    this.onDecrement.emit('decrement');
  }
  @Input()
  childCounter: number = 0;
}
