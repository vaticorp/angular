import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { HostBinding } from '@angular/core';

@Directive({
  selector: 'input [log]'
})
export class LogDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('input', ['$event'])
  onInput(event) {
    event.target.value = event.target.value.replace(/[^ -:0-9]+/g, '');
  }
}
