import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;
  constructor() {}

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      console.log(loginForm);
      return;
    }
    console.log(loginForm);
    console.log(this.usuario);
  }
}
