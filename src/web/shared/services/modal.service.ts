import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisible$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  openModal(): void {
    this.isVisible$.next(true);
  }

  closeModal(): void {
    this.isVisible$.next(false);
  }

}
