import { Injectable } from '@angular/core';
import { ApiProvider } from '../api-provider/api.provider';
import { Observable, Observer } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductProvider {

  private options;

  constructor(private readonly api: ApiProvider) { }

  public loadProduct(id): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    this.options = { headers: headers,
      withCredentials: true};

    return this.api.get(`product/${id}`, this.options );
  }

}
