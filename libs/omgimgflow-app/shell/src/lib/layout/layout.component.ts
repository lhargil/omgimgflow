import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'omgimgflow-layout',
  templateUrl: 'layout.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  links = [
    {
      path: 'home',
      label: 'Home',
    },
    {
      path: 'photos',
      label: 'Photos',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
