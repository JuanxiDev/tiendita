import { Injectable } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoCompraService {

  listaCarrito: Producto[] = [];


  constructor() { }

  agregarProductosComprados(producto: Producto){
    this.listaCarrito.push(producto);
  }

  obtenerCarrito(){
    return this.listaCarrito;
  }
}
