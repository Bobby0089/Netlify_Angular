import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../api.config';

@Injectable({
  providedIn: 'root'
})
export class MyUrlsService {

  //  manageUrlApi: string = 'http://localhost:8080/urlapp/generateurl/viewUserUrls';

  //  ${API_BASE_URL}

  manageUrlApi: string = `${API_BASE_URL}generateurl/viewUserUrls`;

  constructor(private http: HttpClient) { }

   viewAllUrls(pageNumber: number, pageSize: number, userId: number):Observable<any>{
    const params = {
      pageNumber,
      pageSize,
      userId
    }
    return this.http.get(this.manageUrlApi, { params });
  }
}
