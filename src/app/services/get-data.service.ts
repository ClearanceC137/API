import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  API_KEY = 'YOUR_API_KEY';
  constructor(private httpClient: HttpClient) { }
  public getNews(){
    return this.httpClient.get(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`);
  }
}
