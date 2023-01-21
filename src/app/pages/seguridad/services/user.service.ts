import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAllUser(): Observable<any> {
    return this.http.get(`${environment.API_INTERNET}/user`);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${environment.API_INTERNET}/${id}`);
  }

  updateUser(id, user): Observable<any> {
    return this.http.put(`${environment.API_INTERNET}/user/${id}`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${environment.API_INTERNET}/user/${id}`);
  }

  get token() {
    return localStorage.getItem('token');
  }

}
