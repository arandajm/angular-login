import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this._authService.logout();
    this.router.navigateByUrl('/login');
  }
}
