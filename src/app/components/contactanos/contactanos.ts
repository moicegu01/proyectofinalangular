import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contactanos.html',
  styleUrl: './contactanos.css',
})
export class Contactanos {


  formularioContacto = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  submit() {
    if (this.formularioContacto.valid) {
      alert('Datos enviados: ' + JSON.stringify(this.formularioContacto.value));
      this.formularioContacto.reset();
    } else {
      alert('El formulario no es válido');
    }
  }
}
