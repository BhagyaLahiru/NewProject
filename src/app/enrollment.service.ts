import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  constructor(private http: HttpClient) { }

  url = '';

  // tslint:disable-next-line:typedef
  enroll(user: User) {
    this.http.post<any>(this.url, user);
  }

}
