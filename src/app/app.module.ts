import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AboutComponent, AdminComponent, ContactComponent, FooterComponent,
  HomeComponent,
  MessageComponent, MessageDetailsDialogComponent, MessageDialogComponent,
  NavBarComponent, ServicesComponent
} from './components/index';
import { SpinnerComponent } from './spinner/spinner.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { FaqItemComponent } from './components/faq-item/faq-item.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        HomeComponent,
        ServicesComponent,
        AboutComponent,
        ContactComponent,
        MessageComponent,
        MessageDialogComponent,
        AdminComponent,
        MessageDetailsDialogComponent,
        SpinnerComponent,
        FaqsComponent,
        FaqItemComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatDialogModule,
        MatTableModule,
        BrowserAnimationsModule,
        FormsModule,
        MatSnackBarModule,
        AngularFireStorageModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
