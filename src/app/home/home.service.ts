import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  readonly apiUrl = 'http://localhost:49789/api/Gem/Select/-999';
  constructor(private http: HttpClient) { }


  getDataGems()
  {
    return this.http.get(this.apiUrl);
  }

}