import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { PhotosService } from '../../photos.service';

@Component({
  selector: 'omgimgflow-shell-photos',
  templateUrl: './shell-photos.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ShellPhotosComponent implements OnInit {
  searchForm!: FormGroup;
  photosForm!: FormGroup;
  uploadedFile: File | null = null;

  addedPhoto$ = new BehaviorSubject<boolean>(true);
  photos$ = this.addedPhoto$.pipe(switchMap((addedPhoto) => this.photoService.getPhotos()));

  constructor(private fb: FormBuilder, private photoService: PhotosService) {
    this.photosForm = this.fb.group({
      photo: this.fb.control(null, [Validators.required]),
      description: this.fb.control('', [Validators.required]),
    });
    this.searchForm = this.fb.group({
      keyword: this.fb.control(''),
    });
  }

  ngOnInit(): void {}

  handleFileUpload($event: any) {
    if ($event.target.files && $event.target.files.length) {
      this.uploadedFile = $event.target.files[0];
    }
  }

  handleFormSubmit(photoForm: any) {
    console.log(photoForm);
    this.photoService
      .uploadPhoto({
        ...photoForm,
        photo: this.uploadedFile,
      })
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            const progress = Math.round((event.loaded / event.total!) * 100);
            console.log(`Uploaded! ${progress}%`);
            break;
          case HttpEventType.Response:
            console.log('User successfully created!', event.body);
            setTimeout(() => {
              // this.progress = 0;
              this.addedPhoto$.next(true);
              this.photosForm.reset();
              console.log('updated');
            }, 1500);
        }
      });
  }
}
