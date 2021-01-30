import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { PhotosService } from '@omgimgflow/omgimgflow-app/photos/data-access';
import { throwError } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'omgimgflow-shell-edit',
  template: `
    <omgimgflow-shell-edit-form
      *ngIf="omgImage$ | async as omgImage"
      [omgImage]="omgImage"
    ></omgimgflow-shell-edit-form>
  `,
  styles: [],
})
export class ShellEditComponent {
  omgImage$ = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap: ParamMap) => {
      const id = paramMap.get('id');

      if (null == id) {
        return throwError('Route param is missing.');
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
  constructor(private readonly activatedRoute: ActivatedRoute, private readonly photosService: PhotosService) {}
}
