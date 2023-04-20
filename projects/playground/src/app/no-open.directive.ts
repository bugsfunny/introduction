import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'a[no-open]',
})
export class NoOpenDirective {
  // @HostListener('click', ['$event'])
  // OnCilck(event: Event) {
  //   event.preventDefault();
  // }
  @HostListener('click')
  OnCilck() {
    return false;
  }
}
