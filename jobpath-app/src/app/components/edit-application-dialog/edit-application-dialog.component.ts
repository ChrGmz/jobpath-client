import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApplicationData } from 'src/app/interfaces/applicationdata';

@Component({
  selector: 'app-edit-application-dialog',
  templateUrl: './edit-application-dialog.component.html',
  styleUrls: ['./edit-application-dialog.component.css'],
})
export class EditApplicationDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditApplicationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ApplicationData
  ) {}

  cancel() {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
