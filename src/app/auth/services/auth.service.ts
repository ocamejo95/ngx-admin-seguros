import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../../pages/seguridad/models/user';

import {of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public usuario: User;

  constructor(private http: HttpClient) {
    this.usuario = new User();
  }

  login(formData: any) {
    return this.http.post(`${environment.API_URL_LOCAL}/login`, formData)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token);
        }),
      );
  }

  register(formData: any) {
    return this.http.post(`${environment.API_URL_LOCAL}/user`, formData);
  }

  validarToken() {
    return this.http.get(`${environment.API_URL_LOCAL}/renew`, {
      headers: {'x-token': this.token},
    }).pipe(
      map((resp: any) => {
        this.usuario = resp.usuario;
        localStorage.setItem('token', resp.token);
        return true;
      }),

      catchError(error => of(false)),
    );
  }

  get token() {
    return localStorage.getItem('token');
  }

  removeToken() {
    return localStorage.removeItem('token');
  }
}
