import { Injectable } from '@angular/core';
import { User } from './users.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const USERS_PATH = 'users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  save(user: User): Observable<User> {
    return this.httpClient.post<User>(USERS_PATH, user);
  }

  getUserById(id: number): Observable<User> {
    console.log(`${USERS_PATH}/${id}`)
    return this.httpClient.get<User>(`${USERS_PATH}/${id}`);
  }


  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(USERS_PATH);
  }
}
