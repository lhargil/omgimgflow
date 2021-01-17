import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'omgimgflow-photos-form',
  templateUrl: './photos-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosFormComponent implements OnInit {
  @Input()
  photosForm!: FormGroup;
  @Output()
  formSubmit = new EventEmitter<any>();
  @Output()
  fileUpload = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onFileUpload($event: any) {
    console.log($event);
    this.fileUpload.emit($event);
  }

  onSubmit(): void {
    this.formSubmit.emit(this.photosForm.value);
  }
}
