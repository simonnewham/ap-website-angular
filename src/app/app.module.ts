import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MessageDetailsDialogComponent } from './message-details-dialog/message-details-dialog.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { MessageComponent } from './message/message.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServicesComponent } from './services/services.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  entryComponents: [MessageDialogComponent, MessageDetailsDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
