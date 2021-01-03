import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  apiUrl = 'api/photos';
  baseImageUrl = '/photos';
  constructor(private httpClient: HttpClient) {}

  getPhotos(): Observable<string[]> {
    return this.httpClient
      .get<string[]>(this.apiUrl)
      .pipe(map((photos: string[]) => photos.map((photo) => `${this.baseImageUrl}/${photo}`)));
  }

  uploadPhoto(photo: any) {
    var formData: any = new FormData();
    formData.append('description', photo.description);
    formData.append('photo', photo.photo);
    return this.httpClient
      .post<any>(this.apiUrl, formData, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(catchError(this.errorMgmt));
  }

  errorMgmt(error: HttpErrorResponse) {
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
