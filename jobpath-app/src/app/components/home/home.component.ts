import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninDialogData } from 'src/app/interfaces/signindialogdata';
import { SignupDialogData } from 'src/app/interfaces/signupdialogdata';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SigninDialogComponent } from '../signin-dialog/signin-dialog.component';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: FirebaseService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  signup(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      width: '270px',
      data: {}
    });
    dialogRef
      .afterClosed()
      .subscribe((result: SignupDialogData | undefined) => {
        console.log(result);
        if (result) {
          this.authService.signup(result.email, result.password);
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
      .subscribe((result: SigninDialogData | undefined) => {
        if (result) {
          this.authService.signin(result.email, result.password);
        }
      });
  }

}
