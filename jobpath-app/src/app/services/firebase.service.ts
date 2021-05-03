import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public uid = '';

  constructor(
    private firebaseAuth: AngularFireAuth,
    private _router: Router  
  ) {  }

  loggedIn() {
    return !!localStorage.getItem('JobPathUserToken');
  }

  async signin(email: string, password: string) {
    try {
      const userCredential = JSON.stringify(await this.firebaseAuth.signInWithEmailAndPassword(email, password));
      const {
        user: {
          uid,
          stsTokenManager: {
            accessToken
          }
        }
      } = JSON.parse(userCredential);
      this.uid = uid;
      localStorage.setItem('JobPathUserToken', accessToken);
    } catch (err) {
      console.error(err);
    }
  }

  async signup(email: string, password: string) {
    try {
      const userCredential = JSON.stringify(await this.firebaseAuth.createUserWithEmailAndPassword(email, password));
      const {
        user: {
          uid,
          stsTokenManager: {
            accessToken
          }
        }
      } = JSON.parse(userCredential);
      this.uid = uid;
      localStorage.setItem('JobPathUserToken', accessToken);
    } catch (err) {
      console.error(err);
    }
  }

  logout() {
    try {
      this.firebaseAuth.signOut();
      localStorage.removeItem('JobPathUserToken');
      this.uid = '';
      this._router.navigate(['/']);
    } catch (err) {
      console.error(err);
    }
  }

  getToken() {
    return localStorage.getItem('JobPathUserToken');
  }
}
