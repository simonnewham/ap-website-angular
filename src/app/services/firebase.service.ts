import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebase: AngularFirestore,
    private http: HttpClient,
    private authService: AuthService) { }

  /**
   * Log user message to firebase
   * @param data data to log
   */
  logMessage(data: any) {
    // will only get user once
    // this.authService.user.pipe(take(1)).subscribe(user => {
    //   return this.http.post();
    // });
    return this.firebase.collection('messages').add(data);
  }

  /**
   * Get messages from firebase
   */
  getMessages() {
    return new Promise<any>((resolve, reject) => {
      this.firebase.collection('/messages').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        });
    });
  }

  deleteMessage(messageId: string) {
    return this.firebase.collection('messages').doc(messageId).delete();
  }
}
