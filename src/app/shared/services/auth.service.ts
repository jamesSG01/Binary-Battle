import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
 } from '@angular/fire/auth';
 import { LoginData } from '../models/login-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}
  /* Sign up */
  register(email:string, password:string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  /* Sign in */
  login(email:string, password:string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  /* Sign out */
  logout() {
    return signOut(this.auth);
  }
}