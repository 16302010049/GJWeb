import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-chapterdialog',
  templateUrl: './chapterdialog.component.html',
  styleUrls: ['./chapterdialog.component.css']
})
export class ChapterdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChapterdialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
