import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      console.log(loginForm);
      return;
    }
    this._authService.login(this.usuario).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err.error.error.message);
      }
    );
  }
}
