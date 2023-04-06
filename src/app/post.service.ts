import { Injectable } from '@angular/core';

//importando modulos para trabajar con firestore

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { rejects } from 'assert';
import { collection } from 'firebase/firestore';


//el modelo que creamos
import Post from './post.model';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private angularFirestore : AngularFirestore ) {}

    //Metodos para el crud

    //Get, obtener todos
    getPosts() {
      return this.angularFirestore.collection("post").snapshotChanges()
    }

    //obtner uno solo
    getPostById(id) { return this.angularFirestore.collection("posts").doc(id).valueChanges()
    }

    //crear posts
    createPost(post: Post){
      return new Promise<any> ( ( resolve, reject) => {
       this.angularFirestore
       .collection("posts")
       .add(post)
       .then((Response) => {
        console.log(Response)
       },
      (error) => {
        reject(error)
      })
    })
  }
  //Update actualizacion
  UpdatePost(post: Post, id){
    return this.angularFirestore
    .collection("posts")
    .doc(id).
    update({
      title: post.title,
      content: post.content,
      author: post.author
    });
  }
  //Eliminar DElete
  deletePost(post){
    return this.angularFirestore
    .collection("posts")
    .doc(post.id)
    .delete();
  }
 }
