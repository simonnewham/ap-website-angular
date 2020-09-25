import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebase: AngularFirestore) { }

  /**
   * Log user message to firebase
   * @param data data to log
   */
  logMessage(data: any) {
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
