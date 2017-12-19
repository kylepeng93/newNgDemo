import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-my-modal></app-my-modal>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
