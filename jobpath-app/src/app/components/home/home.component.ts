import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SigninDialogData } from 'src/app/interfaces/signindialogdata';
import { SignupDialogData } from 'src/app/interfaces/signupdialogdata';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SigninDialogComponent } from '../signin-dialog/signin-dialog.component';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppsService } from 'src/app/services/apps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: FirebaseService,
    private dialog: MatDialog,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _appsService: AppsService
  ) { }

  ngOnInit(): void {
  }

  signup(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      width: '270px',
      data: {}
    });
    dialogRef
      .afterClosed()
      .subscribe(async (result: SignupDialogData | undefined) => {
        if (result) {
          await this.authService.signup(result.email, result.password);
          await this._appsService.createUser({
            name: result.name,
            email: result.email,
            desiredJobTitle: result.desiredJobTitle,
            salaryTarget: result.salaryTarget,
            dateStartedLooking: result.dateStartedLooking,
          }).subscribe(
            res => console.log(res),
            err => console.error(err)
            );
          this.authService.loggedIn() ?
            this._router.navigate(['/dashboard'])
            : this._snackBar.open('Email already in use. Please log in.', 'Dismiss');
        }
      });
  }
  
  login(): void {
    const dialogRef = this.dialog.open(SigninDialogComponent, {
      width: '270px',
      data: {}
    });
    dialogRef
      .afterClosed()
      .subscribe(async (result: SigninDialogData | undefined) => {
        if (result) {
          await this.authService.signin(result.email, result.password);
          this.authService.loggedIn() ?
          this._router.navigate(['/dashboard'])
          : this._snackBar.open('Please check your credentials and try again.', 'Dismiss');
        }
      });
  }

}
