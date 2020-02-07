import { Injectable } from '@angular/core';
import { ApiProvider } from '../api-provider/api.provider';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductProvider {

  constructor(private readonly api: ApiProvider) { }

  public loadProduct(id): Observable<any> {
    return this.api.get('product', {id});
  }

}
