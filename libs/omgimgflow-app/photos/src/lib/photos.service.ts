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

  getPhotos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl).pipe(
      map((photos: any[]) =>
        photos.map((photo) => {
          return {
            id: photo.id,
            filename: `${this.baseImageUrl}/${photo.filename}?width=300`,
            description: photo.description,
            tags: photo.tags,
          };
        }),
      ),
    );
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
