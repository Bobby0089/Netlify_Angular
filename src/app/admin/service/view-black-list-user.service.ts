import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../api.config';

@Injectable({
  providedIn: 'root'
})
export class ViewBlackListUserService {

  // ${API_BASE_URL}

  // viewBlacklistUser: string = 'http://localhost:8080/urlapp/user/getallblockusers';

  viewBlacklistUser: string = `${API_BASE_URL}user/getallblockusers`;

  constructor(private http: HttpClient) { }

  viewBlacklistUsers(pageNumber: number, pageSize: number):Observable<any>{
    const token = localStorage.getItem('token');

  const headers = {
    Authorization: `Bearer ${token}`
  };
    const params = {
      pageNumber,
      pageSize
    }
    return this.http.get<any[]>(this.viewBlacklistUser, { headers,params });
  }
}
