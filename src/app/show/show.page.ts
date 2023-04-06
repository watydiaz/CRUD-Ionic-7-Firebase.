import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
//Importacion de modelo de datos
import Post from '../post.model';
import { PostService } from '../post.service';
//Servicio Post



@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ShowPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
