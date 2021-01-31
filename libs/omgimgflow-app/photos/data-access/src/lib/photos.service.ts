import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private readonly httpClient: HttpClient) {}

  getPhotos() {
    return this.httpClient.get('/api/photos');
  }

  getPhoto(id: string) {
    return this.httpClient.get(`/api/photos/${id}`);
  }

  uploadPhoto(omgImage: any) {
    const formData = new FormData();
    formData.append('title', omgImage.title);
    formData.append('description', omgImage.description);
    formData.append('photo', omgImage.photo);

    if (omgImage.tag && omgImage.tag.length > 0) {
      omgImage.tags.forEach((tag: string) => formData.append('tags[]', tag));
    }

    return this.httpClient
      .post(`/api/photos`, formData, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(catchError(this.errorMgmt));
  }

  updatePhoto(id: string, photoEdit: any) {
    const formData = new FormData();
    formData.append('title', photoEdit.title);
    formData.append('description', photoEdit.description);
    if (photoEdit.photo != null) {
      formData.append('photo', photoEdit.photo);
    }
    photoEdit.tags.forEach((tag: string) => formData.append('tags[]', tag));
    return this.httpClient
      .put(`/api/photos/${id}`, formData, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(catchError(this.errorMgmt));
  }

  private errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
