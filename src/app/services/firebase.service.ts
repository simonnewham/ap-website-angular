import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private http: HttpClient,
    private authService: AuthService) { }

  /**
   * Log user message to firebase
   * @param data data to log
   */
  logMessage(data: any): Observable<object> {
    return this.http.post(environment.firebaseApi + '/messages.json', data);
  }

  /**
   * Get messages from firebase
   */
  getMessages(): Observable<object> {
    // will only get user once and then swap out with post
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      if (user != null) {
        return this.http.get(environment.firebaseApi + '/messages.json', {
          params: new HttpParams().set('auth', user.token)
        });
      }
    }));
  }

  deleteMessage(messageId: string): Observable<object> {
    return this.http.delete(environment.firebaseApi + '/messages/' + messageId + '.json');
  }
}
