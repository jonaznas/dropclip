import { Injectable } from '@angular/core';
import anime from 'animejs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  public connectionInterfaceSubject = new Subject();
  public connectionControlSubject = new Subject();

  constructor() {
  }

  showConnectionInterface(): void {
    this.connectionInterfaceSubject.next(true);
    anime({ targets: '.connection-form', translateY: -133, duration: 500, easing: 'spring(0, 20, 30, 0)' });
    anime({ targets: '.connection-interface', translateY: 130, duration: 500, delay: 500, easing: 'spring(0, 20, 30, 0)' });
  }

  showConnectionControl(): void {
    this.connectionControlSubject.next(true);
    anime({ targets: '.connection-form', translateY: -133, duration: 500, easing: 'spring(0, 20, 30, 0)' });
    anime({ targets: '.connection-control', translateY: 120, duration: 500, delay: 500, easing: 'spring(0, 20, 30, 0)' });
  }

  hideConnection(): void {
    this.connectionInterfaceSubject.next(false);
    this.connectionControlSubject.next(false);
    anime({ targets: '.connection-form', translateY: 0, duration: 500, delay: 500, easing: 'spring(0, 20, 30, 0)' });
    anime({ targets: '.connection-interface', translateY: 0, duration: 500, delay: 500, easing: 'spring(0, 20, 30, 0)' });
    anime({ targets: '.connection-control', translateY: 0, duration: 500, delay: 500, easing: 'spring(0, 20, 30, 0)' });
  }
}
