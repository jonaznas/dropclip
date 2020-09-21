import { Injectable } from '@angular/core';
import anime from 'animejs';

@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  constructor() {
  }

  showConnectionInterface(): void {
    anime({ targets: '.connection-form', translateY: -133, duration: 500, easing: 'spring(0, 20, 30, 0)' });
    anime({ targets: '.connection-interface', translateY: 100, duration: 500, delay: 500, easing: 'spring(0, 20, 30, 0)' });
  }

  showConnectionControl(): void {
    anime({ targets: '.connection-form', translateY: -133, duration: 500, easing: 'spring(0, 20, 30, 0)' });
    anime({ targets: '.connection-control', translateY: 100, duration: 500, delay: 500, easing: 'spring(0, 20, 30, 0)' });
  }

  hideConnection(): void {
    anime({ targets: '.connection-form', translateY: 0, duration: 500, delay: 500, easing: 'spring(0, 20, 30, 0)' });
    anime({ targets: '.connection-interface', translateY: 0, duration: 500, delay: 500, easing: 'spring(0, 20, 30, 0)' });
    anime({ targets: '.connection-control', translateY: 0, duration: 500, delay: 500, easing: 'spring(0, 20, 30, 0)' });
  }
}
