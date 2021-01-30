import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  updatePhoto(id: string, photoEdit: any) {
    return this.httpClient.put(`/api/photos/${id}`, photoEdit, {
      headers: new HttpHeaders({ 'content-type': 'application/json' }),
    });
  }
}
