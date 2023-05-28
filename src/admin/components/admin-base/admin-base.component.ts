import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrls: ['./admin-base.component.css']
})
export class AdminBaseComponent implements OnInit {
  constructor(
    private authService: AuthService) { }

  valid: boolean;

  ngOnInit(): void {
    this.authService.user.pipe(take(1)).subscribe(user => {
      this.valid = !!user;

      // route back
    });
  }
}
