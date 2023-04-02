import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( public database:AngularFirestore) { }
  //aqui van las funciones q tienen q ver con la base de datos

  //CRUD CFREATE, READ, UPDATE, ELIMINATE.

  //CREATE
  createDoc(data: any, path: string, id: string) {
    const collection = this.database.collection(path);
    return collection.doc(id).valueChanges;
  }

  //GET
    getDoc(path: string, id:string){
      const collection = this.database.collection(path);
      return collection.doc(id).valueChanges;
    }

  //DELEtE
    deleteDoc(path: string, id: string ){
      const collection = this.database.collection(path);
      return collection.doc(id).delete();
      }

  //UPDATE
  updateDoc(data: any, path: string, id: string){
    const collection = this.database.collection(path);
    return collection.doc(id).update(data);
  }






}
