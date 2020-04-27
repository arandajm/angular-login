import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;
  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor....',
    });
    Swal.showLoading();
    this._authService.login(this.usuario).subscribe(
      (data) => {
        Swal.close();
        this.router.navigateByUrl('/home');
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticarse!',
          text: err.error.error.message,
        });
      }
    );
  }
}
