import { Injectable } from '@angular/core';
import { ApiProvider } from '../api-provider/api.provider';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductProvider {

  constructor(private readonly api: ApiProvider) { }

  public loadProduct(code): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      observer.next({
        id: 0,
        title: 'Hamburguesa de buey',
        description: 'Exquisitas hamburguesas de buey. Un manjar a precios económicos. La carne de buey se caracteriza por un color rojo intenso, compacta, con grasa entrevenada.',
        image: 'https://www.recetas360.com/wp-content/uploads/2018/01/receta-hamburguesa-americana-1024x588.jpeg'
      });
      observer.complete();
    });
  }

}
