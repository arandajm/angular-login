import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string;
  private apiKey: string;
  private token: string;

  constructor(private http: HttpClient) {
    this.apiKey = environment.apiKey;
    this.url = environment.firebaseUrl;
    this.token = this.getToken();
  }

  login(user: UsuarioModel) {
    const payload = {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    };
    return this.http
      .post(this.getUrl('accounts:signInWithPassword'), payload)
      .pipe(
        map((resp) => {
          // Set token
          this.setToken(resp['idToken']);
          // return resp to continue the chain
          return resp;
        })
      );
  }

  register(user: UsuarioModel) {
    const payload = {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    };
    return this.http.post(this.getUrl('accounts:signUp'), payload).pipe(
      map((resp) => {
        // Set token
        this.setToken(resp['idToken']);
        // return resp to continue the chain
        return resp;
      })
    );
  }

  logout() {
    console.log('logout');
    localStorage.removeItem('token');
  }

  getUrl(query: string) {
    return `${this.url}${query}?key=${this.apiKey}`;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : '';
  }

  isAuthenticated() {
    return this.token.length > 2;
  }
}
