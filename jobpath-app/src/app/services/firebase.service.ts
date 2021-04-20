import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth) {  }

  async signin(email: string, password: string) {
    try {
      const { user } = await this.firebaseAuth.signInWithEmailAndPassword(email, password);
      this.isLoggedIn = true;
      localStorage.setItem('JobPathUser', JSON.stringify(user));
    } catch (err) {
      console.error(err);
    }
  }

  async signup(email: string, password: string) {
    try {
      const { user } = await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
      this.isLoggedIn = true;
      localStorage.setItem('JobPathUser', JSON.stringify(user));
    } catch (err) {
      console.error(err);
    }
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('JobPathUser');
  }
}
