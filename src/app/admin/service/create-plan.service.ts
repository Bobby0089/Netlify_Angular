import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../api.config';

@Injectable({
  providedIn: 'root'
})
export class CreatePlanService {

  // createPlanApi: string = 'http://localhost:8080/urlapp/plan/create';

// ${API_BASE_URL}

createPlanApi: string = `${API_BASE_URL}plan/create`;

  constructor(private http: HttpClient) { }

  createPlan(obj: any): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post(this.createPlanApi, obj,  { headers});
  }
}
