import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { getStorage, ref } from "firebase/storage";
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Auth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
 } from '@angular/fire/auth';
 import { AngularFireAuth } from '@angular/fire/compat/auth';
 import { User } from '../models/users.model'; 
 import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;


  constructor(private auth: Auth){

  }

  /* Sign up */
  register(email:string, password:string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  /* Sign in */
  login(email:string, password:string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  /* Sign out */
 
}