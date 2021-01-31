import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { PhotosService } from '@omgimgflow/omgimgflow-app/photos/data-access';
import { BehaviorSubject, throwError } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@UntilDestroy()
@Component({
  selector: 'omgimgflow-shell-edit',
  template: `
    <omgimgflow-shell-edit-form
      *ngIf="omgImage$ | async as omgImage"
      [omgImage]="omgImage"
      (photoEdited)="handlePhotoEditSubmit($event)"
      (fileUploaded)="handleFileUpload($event)"
    ></omgimgflow-shell-edit-form>
  `,
  styles: [],
})
export class ShellEditComponent {
  uploadedFile: File | null = null;

  imageId$ = new BehaviorSubject<string | null>(null);

  omgImage$ = this.imageId$.pipe(
    switchMap((id: string | null) => {
      if (null == id) {
        return throwError('Route param is missing');
      }

      return this.photosService.getPhoto(id).pipe(
        map((photo: any) => {
          return {
            ...photo,
            filename: `/omgimages/${photo.filename}`,
          };
        }),
      );
    }),
  );

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly photosService: PhotosService) {
    this.activatedRoute.paramMap
      .pipe(
        tap((paramMap: ParamMap) => {
          const id = paramMap.get('id');

          if (null == id) {
            throw new Error('Route param is missing');
          }
          this.imageId$.next(id);
        }),
        untilDestroyed(this),
      )
      .subscribe();
  }

  handleFileUpload($event: any) {
    if ($event.target.files && $event.target.files.length) {
      this.uploadedFile = $event.target.files[0];
    }
  }

  handlePhotoEditSubmit(photoEdit: any) {
    this.photosService
      .updatePhoto(this.imageId$.getValue() || '', {
        ...photoEdit,
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
            console.log('User successfully created!', event.body);
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
