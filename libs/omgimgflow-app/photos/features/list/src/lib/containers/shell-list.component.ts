import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'omgimgflow-shell-list',
  template: ` <omgimgflow-list></omgimgflow-list> `,
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
