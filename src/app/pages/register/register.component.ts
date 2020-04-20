import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  usuario: UsuarioModel;
  constructor() {}

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
    this.usuario.email = 'jesus@gmail.com';
  }

  registrarUsuario() {
    console.log(this.usuario);
  }
}
