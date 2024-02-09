import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_SERVER = "http://localhost:4000/api";

  constructor(private http: HttpClient) { }

  public getApi(api: string): Observable <any> {
    return this.http.get<any>(this.API_SERVER + api)
  }
  public postApi(add: any, api: string): Observable <any> {
    return this.http.post<any>(this.API_SERVER + api, add )
  }

  public editApi(edit: any, api: string): Observable <any> {
    return this.http.put<any>(this.API_SERVER + api, edit )
  }
  public deleteApi(id: any, api: any): Observable <any> {
    return this.http.delete<any>(this.API_SERVER + api + "/" + id)
  }
}