import { Injectable } from '@angular/core';
import { ApiProvider } from '../api-provider/api.provider';
import { Observable, Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterProvider {



    constructor(private readonly api: ApiProvider) { }

    checkEmail(value: string): Observable<any> {

    
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          });

        const options = { headers: headers,
          withCredentials: true};

          
        console.log('Estamos en checkEmail');
        console.log(value);

        return this.api.get('check_email?value=' + value, options);


      }
      checkUser(value: string) {

        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });

        const options = { headers: headers,
          withCredentials: true};

        

        return this.api.get('check_user?value=' + value, options);
    
      }

      register( username: string, email: string, password: string): Observable<any> {

        console.log(email);
        console.log(username);
        console.log(password);

        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });

        const options = { headers: headers,
          withCredentials: true};

        const idRole = 2;

        return this.api.post('user', {username,password, email, idRole}, options);
      }
}
