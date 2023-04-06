import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';





@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {


  public appPages = [
    { title: 'Tickets', url: 'form-tickets', icon: 'mail' },
    { title: 'Prueba de Conexion', url: 'set-products', icon: 'paper-plane' },
    { title: 'Tarjeta Credito', url: 'tarjeta', icon: 'heart' },
    { title: 'Show', url: 'show', icon: 'archive' },
    { title: 'Create', url: 'create', icon: 'archive' },
    { title: 'Edit', url: 'edit', icon: 'trash' },
    // { title: 'Create', url: 'create', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}


}
