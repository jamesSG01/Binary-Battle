import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { LoginData } from '../interfaces/login-data.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  login({ username, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, username, password);
  }

  register({ username, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, username, password);
  }

  logout() {
    return signOut(this.auth);
  }
}