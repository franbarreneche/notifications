import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <p>Tengo Notifications API?</p> <pre>{{ notification }}</pre>
    <br>
    <p>Tengo Push API?</p> <pre>{{ push }}</pre>
    <br>
    <p>Tengo Service Worker API?</p> <pre>{{ serviceWorker }}</pre>
    <br>
  `,
  styles: ``
})
export class AppComponent {
  notification = ('Notification' in window) ? 'Yes' : 'No';
  push = ('PushManager' in window) ? 'Yes' : 'No';
  serviceWorker = ('serviceWorker' in navigator) ? 'Yes' : 'No';
}
