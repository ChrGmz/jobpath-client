import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { SigninDialogData } from 'src/app/interfaces/signindialogdata';


@Component({
  selector: 'app-signin-dialog',
  templateUrl: './signin-dialog.component.html',
  styleUrls: ['./signin-dialog.component.css']
})
export class SigninDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SigninDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SigninDialogData
  ) { }

    cancel() {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
