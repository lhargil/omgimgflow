import { Component } from '@angular/core';
import { of } from 'rxjs';
import { PhotosService } from '@omgimgflow/omgimgflow-app/photos/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@UntilDestroy()
@Component({
  selector: 'omgimgflow-shell-create',
  template: `
    <omgimgflow-shell-create-form
      *ngIf="omgImage$ | async as omgImage"
      [omgImage]="omgImage"
      (photoCreated)="handlePhotoCreateSubmit($event)"
      (fileUploaded)="handleFileUpload($event)"
    >
    </omgimgflow-shell-create-form>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ShellCreateComponent {
  uploadedFile: File | null = null;

  omgImage$ = of({
    title: '',
    description: '',
    photo: null,
    tags: [],
  });

  constructor(private readonly photosService: PhotosService) {}

  handleFileUpload($event: any) {
    if ($event.target.files && $event.target.files.length) {
      this.uploadedFile = $event.target.files[0];
    }
  }

  handlePhotoCreateSubmit(photoCreate: any) {
    this.photosService
      .uploadPhoto({
        ...photoCreate,
        photo: this.uploadedFile,
      })
      .pipe(untilDestroyed(this))
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            // const progress = Math.round((event.loaded / event.total!) * 100);
            // console.log(`Uploaded! ${progress}%`);
            break;
          case HttpEventType.Response:
            console.log('Photo successfully created!', event.body);
            setTimeout(() => {
              // this.progress = 0;
              // this.addedPhoto$.next(true);
              // this.photosForm.reset();
              console.log('updated');
            }, 1500);
        }
      });
  }
}
