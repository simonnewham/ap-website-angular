import { Component, OnInit } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {

  constructor(
    private dialog: MatDialogRef<MessageDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialog.close();
  }
}
