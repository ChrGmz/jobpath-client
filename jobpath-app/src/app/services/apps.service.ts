import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AppsService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getApps() {
    return this.http.get<any>(`${this.apiUrl}/applications`);
  }

  createUser(userInfo: User) {
    return this.http.post<any>(`${this.apiUrl}/user`, userInfo);
  }
}
