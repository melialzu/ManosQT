import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../users/users.model';

const USERS = [
  {
    id: 1,
    username: 'meli@gmail.com',
    password: '123'
  },
  {
    id: 2,
    username: 'ana@gmail.com',
    password: '123456'
  }

]

const USERNAME ='admin'
const PASSWORD ='123456'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  userId: number = JSON.parse(localStorage.getItem('isLoggedIn') ?? '0');
  loggedUserSubject:BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);

  constructor() { }

  Loguin(username: string, password: string) {
    let loggedUserId: number;

    for(let i = 0; i<USERS.length; i++) {
      if (username === USERS[i].username && password === USERS[i].password){
        loggedUserId = USERS[i].id
        console.log('hola')
        break;
        }
      }

    return new Observable<number>((subscriber) => {
      if (loggedUserId) {
        subscriber.next(loggedUserId);
        } else {
          subscriber.error(new Error('Username or password incorrected'))
        
        subscriber.complete();
    }});
  }
  
  logout() {
    this.userId = 0;
    this.loggedUserSubject.next(undefined)
    localStorage.clear();
  }
  isLoggedIn() {
    return !!this.userId;
  }

}