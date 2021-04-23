import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import {ApplicationData} from '../../interfaces/applicationdata'; 
import { InProgressData } from '../../interfaces/inprogressdata'; 
import { OfferData } from '../../interfaces/offerdata'; 
import { MatDialog } from '@angular/material/dialog';
import { SigninDialogComponent } from '../signin-dialog/signin-dialog.component';

import { SigninDialogData } from '../../interfaces/signindialogdata';
import {EditApplicationDialogComponent} from '../edit-application-dialog/edit-application-dialog.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  applications: ApplicationData[] = [];

  inProgress: ApplicationData[] = [];

  offers: ApplicationData[] = [];

  ngOnInit(): void {
    this.applications = [
      {
        _id: '123',
        companyName: 'Tech Startup',
        position: 'Software Dev',
        method: 'LinkedIn',
        status: 'No response',
        date: new Date('2021-04-20'),
        type: 'Tech interview',
        feedback: 'Need to share my thoughts more',
        employmentType: 'Full-time',
        salary: 80000,
        benefits: ['Vacation', 'insurance', 'sick-days'],
      },
    ];
  }

  editApplication(i: string): void {
    const dialogRef = this.dialog.open(EditApplicationDialogComponent, {
      width: '270px',
      data: {},
    });
    // dialogRef
    //   .afterClosed()
    //   .subscribe((result: SigninDialogData | undefined) => {
    //     if (result) {
    //       this.authService.signin(result.email, result.password);
    //     }
    //   });
  }

  newApplication(i: string): void {
    const dialogRef = this.dialog.open(EditApplicationDialogComponent, {
      width: '270px',
      data: {},
    });
    // dialogRef
    //   .afterClosed()
    //   .subscribe((result: SigninDialogData | undefined) => {
    //     if (result) {
    //       this.authService.signin(result.email, result.password);
    //     }
    //   });
  }

  drop(event: CdkDragDrop<ApplicationData[]>) {
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
