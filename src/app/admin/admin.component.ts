import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageDetailsDialogComponent } from '../message-details-dialog/message-details-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  password: string;
  valid: boolean;
  messages: any;

  deleting: boolean;
  loaded: boolean;
  showIncorrect: boolean;

  constructor(
    private dialog: MatDialog,
    private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.password === '?APGynae20') {
      this.valid = true;
      this.showIncorrect = false;

      this.firebaseService.getMessages().then(resp => {
        this.messages = resp;
        this.loaded = true;
      });
    } else {
      this.showIncorrect = true;
    }
  }

  onRefresh() {
    this.loaded = false;

    this.firebaseService.getMessages().then(resp => {
      this.messages = resp;
      this.loaded = true;
    });
  }

  onViewMessage(message: any) {
    this.dialog.open(MessageDetailsDialogComponent, {
      data: message.payload.doc.data(),
      width: '750px'
    });
  }

  onDelete(message: any) {
    this.loaded = false;
    this.firebaseService.deleteMessage(message.payload.doc.id).then(
      res => {
        this.onRefresh();
      });
  }
}
