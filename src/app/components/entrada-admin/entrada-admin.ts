import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Videojuego } from '../../models/videojuego.model';
import { VideojuegoService } from '../../services/videojuego';

@Component({
  selector: 'app-entrada-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entrada-admin.html',
  styleUrls: ['./entrada-admin.css']
})
export class EntradaAdmin implements OnInit {

  listaVideojuegos: Videojuego[] = [];


  nuevoJuego: Videojuego = {
    nombre: '',
    genero: '',
    fechaSalida: '',
    plataforma: ''
  };


  constructor(private juegoService: VideojuegoService) {}

 
  ngOnInit(): void {
    this.cargarJuegos();
  }

  cargarJuegos() {
    this.juegoService.obtenerVideojuegos().subscribe({
      next: (datos) => {
        this.listaVideojuegos = datos;
      },
      error: (e) => console.error(e)
    });
  }

  agregarVideojuego() {
    this.juegoService.agregarVideojuego(this.nuevoJuego).subscribe({
      next: (resp) => {
        alert('Juego añadido correctamente');
        this.cargarJuegos();
        
        this.nuevoJuego = { nombre: '', genero: '', fechaSalida: '', plataforma: '' };
      },
      error: (e) => alert('Error al guardar')
    });
  }


  borrar(id: number | undefined) {
    if (id && confirm('¿Borrar juego?')) {
      this.juegoService.borrarVideojuego(id).subscribe({
        next: () => this.cargarJuegos()
      });
    }
  }
}
