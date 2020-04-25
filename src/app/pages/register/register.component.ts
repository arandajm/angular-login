import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  usuario: UsuarioModel;
  constructor() {}

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  registrarUsuario(registerForm: NgForm) {
    if (registerForm.invalid) {
      return;
    }
    console.log(registerForm);
    console.log(this.usuario);
  }
}
