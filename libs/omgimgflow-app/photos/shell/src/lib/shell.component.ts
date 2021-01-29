import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'omgimgflow-shell',
  templateUrl: 'shell.component.html',
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
