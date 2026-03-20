import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../api.config';


@Injectable({
  providedIn: 'root'
})
export class AssignQueryService {

  // assignQueryApi: string = 'http://localhost:8080/urlapp/query/assign';

assignQueryApi: string = `${API_BASE_URL}query/assign`;

  constructor(private http: HttpClient) { }

  assignAQuery(obj:any):Observable<any>{
    return this.http.post(this.assignQueryApi,obj);
  }
}
