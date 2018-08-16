import { Component, OnInit } from '@angular/core';
import { CartService } from "./services/cart/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeTab = 1;
  constructor(private cartService: CartService) {}

  getQty() {
    return this.cartService.getTotalQty();
  }

  setActiveTab(tab) {
    this.activeTab = tab;
  }
}
