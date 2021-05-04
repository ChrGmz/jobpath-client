import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApplicationInterface } from 'src/app/interfaces/application';

@Component({
  selector: 'app-edit-application-dialog',
  templateUrl: './edit-application-dialog.component.html',
  styleUrls: ['./edit-application-dialog.component.css'],
})
export class EditApplicationDialogComponent implements OnInit {
  private backupApp: Partial<ApplicationInterface> = { ...this.data }

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
    this.data = {
      _id: this.backupApp._id || '',
      companyName: this.backupApp.companyName || '',
      position: this.backupApp.position || '',
      method: this.backupApp.method || 'Other',
      status: this.backupApp.status || 'No Response',
      date: this.backupApp.date || '',
      employmentType: this.backupApp.employmentType || 'Contract',
      interviews: this.backupApp.interviews || [],
      offers: this.backupApp.offers || []
    };
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {}
}
