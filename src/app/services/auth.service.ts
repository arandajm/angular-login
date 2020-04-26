import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'https://identitytoolkit.googleapis.com/v1/';
  private apiKey: string;

  constructor(private http: HttpClient) {
    this.apiKey = environment.apiKey;
  }

  login(user: UsuarioModel) {
    const payload = {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    };
    return this.http.post(this.getUrl('accounts:signInWithPassword'), payload);
  }

  register(user: UsuarioModel) {
    const payload = {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    };
    return this.http.post(this.getUrl('accounts:signUp'), payload);
  }

  logout() {
    console.log('logout');
  }

  getUrl(query: string) {
    return `${this.url}${query}?key=${this.apiKey}`;
  }
}
