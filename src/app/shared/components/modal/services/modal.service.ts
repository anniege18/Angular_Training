import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalSource = new Subject();
  modalVisible$ = this.modalSource.asObservable();

  constructor() { }

  openModal() {
    this.modalSource.next(true);
  }

  closeModal() {
    this.modalSource.next(false);
  }
}
