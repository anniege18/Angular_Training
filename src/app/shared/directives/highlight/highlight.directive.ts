import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private backgroundColor = "white";

  @HostBinding("style.backgroundColor") get getColor(){
    return this.backgroundColor;
  }

  @HostBinding("style.cursor") get getCursor(){
    return "pointer";
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.backgroundColor ="lightgrey";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.backgroundColor = "white";
  }

}
