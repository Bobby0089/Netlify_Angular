import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../api.config';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {

  // ${API_BASE_URL}

  // apiUrl: string = 'http://localhost:8080/urlapp/user/getallusers';
  // totalCountApi: string = 'http://localhost:8080/urlapp/user/count'

  apiUrl: string = `${API_BASE_URL}user/getallusers`;
  totalCountApi: string = `${API_BASE_URL}user/count`;

  constructor(private http: HttpClient) { }

  getAllUser(pageNumber: number, pageSize: number): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = {
      Authorization: `Bearer ${token}`
    };
    const params = {
      pageNumber,
      pageSize
    }
    return this.http.get<any[]>(this.apiUrl, { headers, params });
  }

  getTotalUsersCount(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get<any>(this.totalCountApi, { headers });
  }

}
