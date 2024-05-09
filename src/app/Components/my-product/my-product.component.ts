import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Coches } from '../../interfaces/product.model';


@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.scss'],
})

export class MyProductComponent implements OnInit {

  nombreProductoInput: string;
  modeloInput: string;
  kilometrajeInput: string;
  ubicacionInput: string;
  precioInput: string;
  imagenInput: string;
  ratingInput: number;

  @Input()
  mensajePadre: string;


  @Output()
  eventoCrearProducto = new EventEmitter<Coches>();

  constructor() { }

  ngOnInit() {
    console.log("tambien funka");
  }
  guardarProducto(){
    let newProd: Coches = {
      nombreProducto: this.nombreProductoInput,
      modelo: this.modeloInput,
      kilometraje: this.kilometrajeInput,
      ubicacion: this.ubicacionInput,
      precio: this.precioInput,
      imagen: this.imagenInput,
      rating: {
        rate: this.ratingInput
      }
    }
    this.eventoCrearProducto.emit(newProd)
    this.nombreProductoInput = ' '
    this.modeloInput = ' '
    this.kilometrajeInput = ' '
    this.ubicacionInput = ' '
    this.precioInput = ' '
    this.imagenInput = ' '
    this.ratingInput = 0;

  }


}
