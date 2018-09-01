import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input [nav]'
})
export class NavDirective {

  @HostBinding('style.border-color') borderColor: string = 'transperent';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('focus', ['$event'])
  onFocus(event) {
    this.borderColor = 'green';
  }

  @HostListener('input', ['$event'])
  onInput(event) {
    this.borderColor = 'blue';
  }

  @HostListener('blur', ['$event'])
  unFocus(event) {
    this.renderer.removeStyle(this.element.nativeElement, 'border-color');
  }
}
