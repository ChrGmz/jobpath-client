import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseService } from './services/firebase.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _auth: FirebaseService
  ) {}

  canActivate(): boolean {
    if (this._auth.loggedIn()) return true;
    this._router.navigate(['/']);
    return false;
  }
}
