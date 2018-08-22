import { Component, AfterViewInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @Output() goToCart: EventEmitter<void> = new EventEmitter();
  @ViewChild('appTitle')
  private title: ElementRef;

  ngAfterViewInit() {
    const last = this.title.nativeElement.lastChild;
    setTimeout(() => {
      last.innerText = 'Books Store';
    }, 1000)
  }

  onClick() {
    this.goToCart.emit();
  }


}
