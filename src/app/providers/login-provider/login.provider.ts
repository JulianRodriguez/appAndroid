import { Injectable } from '@angular/core';
import { ApiProvider } from '../api-provider/api.provider';
import { Observable, Observer } from 'rxjs';
import { Ilogin } from 'src/app/interfaces/login.interface';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginProvider {

  constructor(private readonly api: ApiProvider) { }

  public doLogin(user, password): Observable<any> {

    const base64Credential: string = btoa(user + ':' + password);

    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + base64Credential,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const options = { headers: headers,
      withCredentials: true};
    
    console.log('Aqui ha llegado');

    return this.api.post('login', {
      email: user,
      password: password,
    }, options);

  }
}
