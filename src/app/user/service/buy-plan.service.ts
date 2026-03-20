import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../api.config';

@Injectable({
  providedIn: 'root'
})
export class BuyPlanService {

  // private buyurl = 'http://localhost:8080/urlapp/buyplan/buy'

   private buyUrl = `${API_BASE_URL}buyplan/buy`;

  constructor(private http: HttpClient) { }

  buyPlans(data: any): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post(this.buyUrl, data, { headers });
  }
}
