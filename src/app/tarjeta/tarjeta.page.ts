import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';
import { IonicModule } from '@ionic/angular';




@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.page.html',
  styleUrls: ['./tarjeta.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})



export class TarjetaPage {
  createForm = this.fb.group({
    titular: [''],
    numeroTarjeta: [''],
    fechaVencimiento: [''],
    cvv: [''],
  });


  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.createForm.value);
  }

}














