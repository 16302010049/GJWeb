import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-renamedialog',
  templateUrl: './renamedialog.component.html',
  styleUrls: ['./renamedialog.component.css']
})
export class RenamedialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RenamedialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
