import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }
  postData(postData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.url, postData, { headers });
  }
}
