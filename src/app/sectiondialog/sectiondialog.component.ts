import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-sectiondialog',
  templateUrl: './sectiondialog.component.html',
  styleUrls: ['./sectiondialog.component.css']
})
export class SectiondialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SectiondialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
