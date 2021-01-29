import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private readonly httpClient: HttpClient) {}

  getPhotos() {
    return this.httpClient.get('/api/photos');
  }
}
