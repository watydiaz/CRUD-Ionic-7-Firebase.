import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-form-tickets',
  templateUrl: './form-tickets.page.html',
  styleUrls: ['./form-tickets.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FormTicketsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
