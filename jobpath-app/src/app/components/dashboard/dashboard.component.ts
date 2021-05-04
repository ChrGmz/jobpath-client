import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { ApplicationInterface } from '../../interfaces/application'; 
import { InProgressData } from '../../interfaces/inprogressdata'; 
import { OfferData } from '../../interfaces/offerdata'; 
import { MatDialog } from '@angular/material/dialog';
import { SigninDialogComponent } from '../signin-dialog/signin-dialog.component';

import { SigninDialogData } from '../../interfaces/signindialogdata';
import {EditApplicationDialogComponent} from '../edit-application-dialog/edit-application-dialog.component'
import { InterviewInterface } from 'src/app/interfaces/interview';
import { AppsService } from 'src/app/services/apps.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private _appsService: AppsService,
    private _firebaseAuth: FirebaseService
    ) {}

  applications: ApplicationInterface[] = [];

  inProgress: ApplicationInterface[] = [];

  offers: OfferData[] = [];

  ngOnInit(): void {
    this._appsService.getApps()
      .subscribe(
        res => {
          console.log(res);
          this.applications = res;
        },
        err => console.error(err)
      )
  }

  editApplication(app: ApplicationInterface): void {
    const dialogRef = this.dialog.open(EditApplicationDialogComponent, {
      width: '270px',
      data: app,
    });
    dialogRef
      .afterClosed()
      .subscribe((result: ApplicationInterface | undefined) => {
        if (result) {
          this._appsService.updateApp(result)
            .subscribe(
              res => {
                this.applications[this.applications.indexOf(app)] = res;
              },
              err => console.error(err)
            );
        }
      });
  }

  newApplication(): void {
    const dialogRef = this.dialog.open(EditApplicationDialogComponent, {
      width: '270px',
      data: {},
    });
    dialogRef
      .afterClosed()
      .subscribe((result: ApplicationInterface | undefined) => {
        if (result) {
          this._appsService.createApp(result)
            .subscribe(
              res => this.applications.push(res),
              err => {
                console.error(err);
                if (err.error.error.code === 'auth/id-token-expired') this._firebaseAuth.logout();
              }
            );
        }
      });
  }

  drop(event: CdkDragDrop<ApplicationInterface[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
