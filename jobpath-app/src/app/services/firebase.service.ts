import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth) { }
  
  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithCredential
  }
}
