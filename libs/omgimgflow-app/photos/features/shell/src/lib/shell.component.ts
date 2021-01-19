import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'omgimgflow-shell',
  template: `
    Features Shell
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ShellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
