import { Injectable } from '@angular/core';
import { getStorage, ref } from "firebase/storage";


// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const usersRef = ref(storage,'users');

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private db: AngularFirestore) { }
}
