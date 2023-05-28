import { Component } from '@angular/core';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  password: string;
  valid: boolean;

  signingIn: boolean;
  loaded: boolean;
  showIncorrect: boolean;

  constructor(
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.pipe(take(1)).subscribe(user => {
      this.valid = !!user;
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
      }
    }, error => {
      this.signingIn = false;
      this.password = '';
      this.showIncorrect = true;
    });
  }
}
