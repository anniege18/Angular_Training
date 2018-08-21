import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {ModalService} from './services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  private visible;

  constructor(private el: ElementRef, private modalService: ModalService) { }

  ngOnInit() {
    this.visible = this.modalService.modalVisible$;
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const overlay = this.el.nativeElement.querySelector('.modal-overlay');
    const modalContent = this.el.nativeElement.querySelector('.modal');
    if (targetElement !== modalContent && !modalContent.contains(targetElement) && overlay.contains(targetElement)) {
      this.modalService.closeModal();
    }
  }

  onClose() {
    this.modalService.closeModal();
  }

}
