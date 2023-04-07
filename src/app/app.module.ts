import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule,  } from "@angular/fire/compat/firestore";
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { TarjetaPipe } from './tarjeta.pipe';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';





@NgModule({
  declarations: [
    TarjetaPipe
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    
  ],


})
export class AppModule { }
