import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  usuario: UsuarioModel;
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  registrarUsuario(registerForm: NgForm) {
    if (registerForm.invalid) {
      return;
    }
    this._authService.register(this.usuario).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err.error.error.message);
      }
    );
  }
}
