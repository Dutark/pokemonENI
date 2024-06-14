import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() { }

  private hasToken(): boolean {
    return localStorage.getItem('token') !== null;
  }

  login(email: string, password: string): void {
    localStorage.setItem('token', 'authenticated');
    localStorage.setItem('email', email);
    this.isAuthenticatedSubject.next(true);
    console.log(email, password);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.isAuthenticatedSubject.next(false);
  }

  isAuth(): boolean {
    return this.hasToken();
  }
}
