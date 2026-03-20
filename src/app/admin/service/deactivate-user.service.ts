import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../api.config';

@Injectable({
  providedIn: 'root'
})
export class DeactivateUserService {

  // deactivateApi: string = 'http://localhost:8080/urlapp/user/BlackListUser';

  // ${API_BASE_URL}

  deactivateApi: string = `${API_BASE_URL}user/BlackListUser`;

  constructor(private http: HttpClient) { }

  deactivatedUser(userId: any): Observable<any> {
  const token = localStorage.getItem('token');

  const headers = {
    Authorization: `Bearer ${token}`
  };

  const params = {
    userId: userId.toString()
  };

  return this.http.put(this.deactivateApi, {}, { headers, params });
}

}
