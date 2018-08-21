import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() goToCart: EventEmitter<any> = new EventEmitter();
  @ViewChild('appTitle')
  private title: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.goToCart.emit();
  }

  onTitleLinkClick() {
    this.title.nativeElement.firstChild.style.right = '0';
    this.title.nativeElement.firstChild.style.left = 'auto';
  }

}
