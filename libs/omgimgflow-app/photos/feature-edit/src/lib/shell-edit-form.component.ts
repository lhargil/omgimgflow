import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  @Output() photoEdited = new EventEmitter<any>();
  @Output()
  fileUploaded = new EventEmitter<any>();

  photoEditForm?: FormGroup;

  get tags() {
    return this.photoEditForm?.get('tags') as FormArray;
  }

  get title() {
    return this.photoEditForm?.get('title');
  }

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.photoEditForm = this.formBuilder.group({
      photo: this.formBuilder.control(null),
      title: [this.omgImage.title, [Validators.required]],
      description: [this.omgImage.description],
      tags: this.formBuilder.array(
        this.omgImage.tags.map((tag: string) => this.formBuilder.control(tag, [Validators.required])),
      ),
    });
  }

  handleRemoveTag(index: number) {
    this.tags.removeAt(index);
  }

  handleAddTag() {
    this.tags.push(this.formBuilder.control('', [Validators.required]));
  }

  handleFileUpload($event: any) {
    this.fileUploaded.emit($event);
  }

  handleSubmit() {
    this.photoEditForm?.markAllAsTouched();
    if (this.photoEditForm?.invalid) {
      return;
    }
    const photoEdit = this.photoEditForm?.value;

    this.photoEdited.emit(photoEdit);
  }
}
