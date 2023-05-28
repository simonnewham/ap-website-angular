import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs';
import { MessageDetailsDialogComponent } from 'src/app/components';
import { Message } from 'src/app/models/message';
import { FirebaseService } from 'src/app/services';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent implements OnInit {
  constructor(private dialog: MatDialog,
    private firebaseService: FirebaseService) { }

  loaded: boolean;
  messages: Message[] = [];

  ngOnInit(): void {
    this.getMessages();
    // debug
    this.loaded = true
  }

  getMessages(): void {
    this.firebaseService.getMessages().pipe(
      map((resp: any) => {
        const messages = [];
        for (const key in resp) {
          if (resp.hasOwnProperty(key)) {
            messages.push({ ...resp[key], id: key });
          }
        }
        return messages;
      })).subscribe(resp => {
        this.messages = resp;
        this.loaded = true;
      });
  }

  onRefresh(): void {
    this.loaded = false;
    this.getMessages();
  }

  onViewMessage(message: any): void {
    this.dialog.open(MessageDetailsDialogComponent, {
      data: message,
      width: '750px'
    });
  }

  onDelete(message: any): void {
    this.loaded = false;
    this.firebaseService.deleteMessage(message.id).subscribe(res => {
      this.onRefresh();
    });
  }
}
