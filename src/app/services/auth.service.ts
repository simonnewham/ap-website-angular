import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/user-models';
import { environment } from '../../environments/environment';
import { AuthResponse } from '../models/auth-response';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    key: string;
    user = new BehaviorSubject<User>(null);
    // Use BehaviourSubject for on demand fetching of user data

    constructor(private http: HttpClient) {
        this.key = environment.firebaseConfig.apiKey;
    }

    public signIn(password: string): Observable<object> {
        return this.http.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.key}`,
            {
                email: 'admin@capetowngynaecologist.co.za',
                password: password,
                returnSecureToken: true
            }).pipe(tap((data: AuthResponse) => {
                // tap can perfrom action without changing data
                // create date from expires in seconds
                const expireDate = new Date(new Date().getTime() + +data.expiresIn * 1000);

                const _user = new User(
                    data.email,
                    data.localId,
                    data.idToken,
                    expireDate
                );

                // set the new user as active
                this.user.next(_user);
            }));
    }

    public signOut(): void {
        this.user.next(null);
    }
}
