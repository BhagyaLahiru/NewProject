import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  readonly apiUrl = 'http://localhost:49789/api/User/Select/';
  constructor(private http: HttpClient) { }
  
  getUserProfile(id:number) {
    return this.http.get(this.apiUrl+id);
  }

  postFile(caption: string, fileToUpload: File) {
    const endpoint = 'http://localhost:49789/api/User/insert';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    return this.http
      .post(endpoint, formData);
  }

}