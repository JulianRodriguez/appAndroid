import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiProvider {

  private readonly baseUrl = '';

  constructor(
    private readonly httpProvider: HttpClient
  ) {}

  public get(url: string, params?: any): Observable<any> {
    return this.httpProvider.get(`${this.baseUrl}/${url}`, params);
  }

  public post(url: string, params?: any): Observable<any> {
    return this.httpProvider.post(`${this.baseUrl}/${url}`, params);
  }

  public put(url: string, params?: any): Observable<any> {
    return this.httpProvider.put(`${this.baseUrl}/${url}`, params);
  }

  public delete(url: string, params?: any): Observable<any> {
    return this.httpProvider.delete(`${this.baseUrl}/${url}`, params);
  }
}
