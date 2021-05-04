import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApplicationInterface } from '../interfaces/application';
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
    return this.http.get<ApplicationInterface[]>(`${this.apiUrl}/applications`);
  }

  createUser(userInfo: User) {
    return this.http.post<any>(`${this.apiUrl}/user`, userInfo);
  }

  createApp(appInfo: ApplicationInterface) {
    return this.http.post<ApplicationInterface>(`${this.apiUrl}/applications`, appInfo);
  }

  updateApp(appInfo: ApplicationInterface) {
    return this.http.put<ApplicationInterface>(`${this.apiUrl}/applications/${appInfo._id}`, appInfo);
  }
}
