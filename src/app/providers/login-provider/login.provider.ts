import { Injectable } from '@angular/core';
import { ApiProvider } from '../api-provider/api.provider';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginProvider {

  constructor(private readonly api: ApiProvider) { }

  public doLogin(user, password): Observable<any> {
    return new Observable((observer: Observer<boolean>) => {
      observer.next(true);
      observer.complete();
    });
  }

}
