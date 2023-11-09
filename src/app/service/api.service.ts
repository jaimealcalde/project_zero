import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_SERVER = "http://localhost:4000/api";
  add_api = "/fridge";

  constructor(private http: HttpClient) { }

  public getApi(): Observable <any> {
    return this.http.get<any>(this.API_SERVER +this.add_api)
  }
  public postApi(add: any): Observable <any> {
    return this.http.post<any>(this.API_SERVER +this.add_api, add )
  }
}
