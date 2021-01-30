import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'omgimgflow-shell-edit-form',
  templateUrl: `shell-edit-form.component.html`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ShellEditFormComponent implements OnInit {
  @Input() omgImage: any;
  // @ViewChild(EditComponent, { static: true }) editComponent!: EditComponent;

  private photoEditForm?: FormGroup;

  ngOnInit() {
    // this.photoEditForm = this.editComponent.createFormGroup(this.omgImage);
  }
}
