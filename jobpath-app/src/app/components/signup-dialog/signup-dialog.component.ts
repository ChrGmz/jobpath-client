import { Component, Inject, OnInit } from '@angular/core';
import { SignupDialogData } from 'src/app/interfaces/signupdialogdata';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.css']
})
export class SignupDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SignupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SignupDialogData
  ) { }

  cancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
