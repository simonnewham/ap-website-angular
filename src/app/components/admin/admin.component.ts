import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/internal/operators/take';
import { map } from 'rxjs/operators';
import { AuthService, FirebaseService } from 'src/app/services/index';
import { MessageDetailsDialogComponent } from '../message-details-dialog/message-details-dialog.component';
import { Message } from 'src/app/models/message';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  password: string;
  valid: boolean;
  messages: Message[];

  signingIn: boolean;
  loaded: boolean;
  showIncorrect: boolean;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.authService.user.pipe(take(1)).subscribe(user => {
      this.valid = !!user;
      this.getMessages();
    });
  }

  onSubmit(): void {
    this.signingIn = true;
    this.showIncorrect = false;

    this.authService.signIn(this.password).subscribe(data => {
      if (data) {
        this.signingIn = false;
        this.valid = true;

        // TODO: re-route to table component
        this.showIncorrect = false;
        this.password = '';
        this.getMessages();
      }
    }, error => {
      this.signingIn = false;
      this.password = '';
      this.showIncorrect = true;
    });
  }

  getMessages(): void {
    this.firebaseService.getMessages().pipe(
      map((resp: any) => {
      const messages = [];
      for (const key in resp) {
        if (resp.hasOwnProperty(key)){
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

  onLogOut(): void {
    this.valid = false;
    this.authService.signOut();
  }
}
