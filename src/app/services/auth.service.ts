import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}