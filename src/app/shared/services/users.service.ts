import { Injectable } from '@angular/core';
import { getStorage, ref } from "firebase/storage";
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/users.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private firestore: Firestore) { }
  getUsers(): Observable<User[]> {
    // Create a storage reference from our storage service
    const usersRef = collection(this.firestore, 'users');
    return collectionData(usersRef) as Observable<User[]>;
  }
}
