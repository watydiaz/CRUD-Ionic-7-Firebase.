import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-set-products',
  templateUrl: './set-products.page.html',
  styleUrls: ['./set-products.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SetProductsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
