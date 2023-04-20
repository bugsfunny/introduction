import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  parentDecrement($event: string) {
    if ($event == 'decrement') {
      this.counter--;
    }
  }
  increment() {
    this.counter++;
  }
  counter: number = 0;
}
