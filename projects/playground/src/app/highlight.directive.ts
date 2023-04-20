import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: 'p[highlight]',
})
export class HighlightDirective {
  @Input() highlight: number | string | undefined;

  @Input('aze')
  @HostBinding('style.backgroundColor')
  color: string = 'yellow';

  @HostListener('mouseenter', ['$event.clientX'])
  onMouseEnter(clientX: number) {
    console.log(clientX);
    if (this.highlight === 2) {
      this.highlightp('red');
    } else {
      this.highlightp(this.highlight as string);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // this.highlightp(this.color as string);
    this.color = 'green';
  }
  constructor(private el: ElementRef) {}

  private highlightp(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
