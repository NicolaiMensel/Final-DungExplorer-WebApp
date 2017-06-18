import { Injectable } from '@angular/core';
import {User} from "../user";
import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UsersService {

  private apiUrl = 'http://127.0.0.1:9000/users';

  constructor(private http: Http) {
  }

  //Writes the given user to the API. Writes an error in the console of the browser if it fails.
  createUser(newUser: User): Promise<User> {
    let headers: Headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post(this.apiUrl, JSON.stringify(newUser),
        {headers: headers})
      .toPromise()
      .then(res => res.json().data as User)
      .catch(this.handleError);
  }
  //return all topics from the database. Can be called even if a user is not authenticated.
  getUsers(): Promise<User[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }

  getUser(id: string): Observable<User> {
    return this.http
      .get(this.apiUrl + "/" + id )
      .map(response => response.json() as User)
      .catch(this.handleError);
    // const url = `${this.apiUrl}/${id}`;
    // return this.http.get(url)
    //   .toPromise()
    //   .then(response => response.json().data as User)
    //   .catch(this.handleError);
  }

  getMe(): Observable<User> {
    let headers: Headers = new Headers();
    headers.append("Authorization", "Bearer " + localStorage.getItem('token').substring(10,158));
    return this.http
      .get(this.apiUrl + "/" + "me", {headers: headers})
      .map(response => response.json() as User)
      .catch(this.handleError);
  }

  deleteUser(user: User): Promise<User> {
    let headers: Headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + localStorage.getItem('token').substring(10,158));
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.delete(url,
      {headers: headers})
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  updateUser(user: User): Promise<User> {
    let headers: Headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + localStorage.getItem('token').substring(10,158));
    const url = `${this.apiUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }
  //Writes an error message in the browsers console.
  private handleError(error: any): Promise<any> {
    console.error('An error was made - ', error);
    return Promise.reject(error.message || error);
  }
}

