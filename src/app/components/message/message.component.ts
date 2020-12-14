import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { FirebaseService } from 'src/app/services/index';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  @Output() submitted = new EventEmitter<void>();

  private configSuccess: MatSnackBarConfig = {
    panelClass: ['style-success'],
    duration: 4000
  };

  sending: boolean;

  constructor(
    private snackBar: MatSnackBar,
    private firebaseService: FirebaseService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const data =  {
      name: this.form.form.value.name,
      phone: this.form.form.value.tel,
      email: this.form.form.value.email,
      message: this.form.form.value.message,
      timelogged: Date.now()
    };

    this.sending = true;

    this.firebaseService.logMessage(data).subscribe(res => {
      this.form.reset();
      this.snackBar.open('Message Sent!', '', this.configSuccess);
      this.submitted.emit();
      this.sending = false;
    });
  }
}

