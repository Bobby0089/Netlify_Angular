import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectUrlService {

  constructor(private http: HttpClient) { }

   redirectUrl(url: string): Observable<any> {
     const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`
  };
    return this.http.get<any>(`https://railwaydev-production-df24.up.railway.app/urlapp/urlclick/${url}`,{ headers });
  }
}
