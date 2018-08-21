import { Component } from '@angular/core';
import {ModalService} from "./shared/components/modal/services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private modalService: ModalService) {
  }

  onClick() {
    this.modalService.openModal();
  }
}
