import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorByText]'
})
export class ColorByTextDirective {
  @Input() appColorByText: any;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  @HostListener('click',  ['$event']) clickHandler(event) {
    event.stopPropagation();
    this.renderer.setStyle(this.el.nativeElement,'color', this.appColorByText);
  }

}
