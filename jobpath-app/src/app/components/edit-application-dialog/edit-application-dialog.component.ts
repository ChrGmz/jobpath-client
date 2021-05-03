import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApplicationInterface } from 'src/app/interfaces/application';

@Component({
  selector: 'app-edit-application-dialog',
  templateUrl: './edit-application-dialog.component.html',
  styleUrls: ['./edit-application-dialog.component.css'],
})
export class EditApplicationDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditApplicationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ApplicationInterface
  ) {}

  methods = [
    'LinkedIn',
    'Indeed',
    'Glassdoor',
    'Employer Website',
    'Other'
  ]

  statuses = ['No Response', 'Interview', 'Offer', 'Rejected'];

  types = [
    'Full-Time',
    'Part-Time',
    'Contract'
  ]

  cancel() {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
