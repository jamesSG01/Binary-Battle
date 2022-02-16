

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
   import { UsersService } from 'src/app/shared/services/users.service';
   
  @Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    user$: Observable<User>;
    
    private afs: AngularFirestore
    constructor(private auth: Auth,private firestore: Firestore){
      
    }
  /* Sign up */
  register(name:string, email:string, password:string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
      // Signed in 
      // Create record on Firestore 
      const currUID = this.auth.currentUser.uid; 
      console.log('This is UID:'+ this.auth.currentUser.uid);
      const user:User = {'email':email,'nickname':name,'points':0,rank:null,'uid':currUID,'balance':1000};
      const usersRef = collection(this.firestore, 'users');
      addDoc(usersRef,user );
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  /* Sign in */
  login(email:string, password:string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  /* Sign out */
}