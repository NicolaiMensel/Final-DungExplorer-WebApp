import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http, Response, Headers} from "@angular/http";
import {UserRoles} from "../users/user";
import enumerate = Reflect.enumerate;
@Injectable()
export class AuthService {
  private token: String;
  private apiUrl = 'http://127.0.0.1:9000/auth';

  constructor(private http: Http) {
  }

  login(username: String, password: String): Observable<String> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    return this.http.post(this.apiUrl,null,{headers: headers})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          localStorage.setItem('token', JSON.stringify({token: token }));
          return this.token;
        }
      });
  }

  loggedIn() : boolean{
    return ((!!localStorage.getItem('token') && !!localStorage.getItem('loggedInUser')));

  }

  isAuthorized(topicId : string) : boolean{
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    let result;
    if(loggedInUser != null) {
      result = (topicId == loggedInUser.id || loggedInUser.role == UserRoles[UserRoles.Admin])
    }
    else{
      result = false;
    }
    return result;
  }

  logout(): boolean {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    return false;
  }
}
