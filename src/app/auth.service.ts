import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';

const helper = new JwtHelperService();

import {User} from './User';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  public getToken(): string 
  {
    return localStorage.getItem('access_token');
  }

  public readToken(): any
  {
    const token = localStorage.getItem('access_token');
    return helper.decodeToken(token);
  }


  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    if (token) {
      return true;
    } else {
      console.log('no token');
      return false;
    }
  }

  login(user: User): Observable<any> {
    return this.http.post<any>('https://mysterious-ravine-67225.herokuapp.com/api/login', user);
  }

}
