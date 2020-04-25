import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Url to create new users
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  private url: string = 'https://identitytoolkit.googleapis.com/v1/';
  private apiKey: string = 'AIzaSyDQYydhCWkaXDG6Q_UUvLO1EM4xus0smtU';
  constructor(private http: HttpClient) {}

  login(user: UsuarioModel) {}

  register(user: UsuarioModel) {}

  logout() {
    console.log('logout');
  }
}