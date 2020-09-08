import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

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
    duration: 2000
  };

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.form.reset();
    this.snackBar.open('Message Sent!', '', this.configSuccess);
    this.submitted.emit();
  }
}

