import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'omgimgflow-shell-create-form',
  templateUrl: './shell-create-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ShellCreateFormComponent implements OnInit {
  @Input() omgImage: any;
  @Output() photoCreated = new EventEmitter<any>();
  @Output() fileUploaded = new EventEmitter<any>();

  photoCreateForm!: FormGroup;

  get tags() {
    return this.photoCreateForm.get('tags') as FormArray;
  }

  get title() {
    return this.photoCreateForm.get('title');
  }

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.photoCreateForm = this.formBuilder.group({
      title: [this.omgImage.title, [Validators.required]],
      description: [this.omgImage.description],
      tags: this.formBuilder.array([]),
      photo: [null, [Validators.required]],
    });
  }

  handleAddTag() {
    this.tags.push(this.formBuilder.control('', [Validators.required]));
  }

  handleRemoveTag(index: number) {
    this.tags.removeAt(index);
  }

  handleSubmit() {
    this.photoCreateForm.markAllAsTouched();
    if (this.photoCreateForm.invalid) {
      return;
    }
    console.log(this.photoCreateForm.value);

    this.photoCreated.emit(this.photoCreateForm.value);
  }

  handleFileUpload($event: any) {
    this.fileUploaded.emit($event);
  }
}
