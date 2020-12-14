import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-message-details-dialog',
  templateUrl: './message-details-dialog.component.html'
})
export class MessageDetailsDialogComponent implements OnInit {
  message: any;

  constructor(
    private dialog: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA)public data: any
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.message = this.data;
    }
  }

  closeDialog(): void {
    this.dialog.close();
  }

}
