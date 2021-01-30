import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { PhotosService } from '@omgimgflow/omgimgflow-app/photos/data-access';
import { BehaviorSubject, throwError } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'omgimgflow-shell-edit',
  template: `
    <omgimgflow-shell-edit-form
      *ngIf="omgImage$ | async as omgImage"
      [omgImage]="omgImage"
      (photoEdited)="handlePhotoEdit($event)"
    ></omgimgflow-shell-edit-form>
  `,
  styles: [],
})
export class ShellEditComponent {
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

  handlePhotoEdit(photoEdit: any) {
    this.photosService
      .updatePhoto(this.imageId$.getValue() || '', photoEdit)
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
