import { Component, OnInit } from '@angular/core';
import { PhotosService } from '@omgimgflow/omgimgflow-app/photos/data-access';
import { map } from 'rxjs/operators';

@Component({
  selector: 'omgimgflow-shell-list',
  template: `
    <omgimgflow-list [photos]="photos$ | async" (photoClicked)="handlePhotoClicked($event)"></omgimgflow-list>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ShellListComponent implements OnInit {
  photos$ = this.photosService.getPhotos().pipe(
    map((photos: any) => {
      return photos.map((photo: any) => {
        return {
          ...photo,
          filename: `/omgimages/${photo.filename}`,
        };
      });
    }),
  );
  constructor(private readonly photosService: PhotosService) {}

  ngOnInit(): void {}

  handlePhotoClicked(photo: any) {
    alert(JSON.stringify(photo));
  }
}
