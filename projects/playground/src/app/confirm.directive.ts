import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[confirm]',
})
export class ConfirmDirective {
  @Input('confirm-message')
  message: string | undefined;

  @HostListener('click')
  onClick() {
    return window.confirm(this.message || '');
  }
}
