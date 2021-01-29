import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'omgimgflow-shell-list',
  template: ` <p>shell-list works!</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ShellListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
