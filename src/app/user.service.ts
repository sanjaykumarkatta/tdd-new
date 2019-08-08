import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
import * as users from './users.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

serviceUrl = 'https://jsonplaceholder.typicode.com/users';

constructor(private http: HttpClient) { }

  public getUserDetails(): Observable<any> {
    return  this.http.get(this.serviceUrl)
    

  }
}
