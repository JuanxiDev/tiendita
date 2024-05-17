import { Component, OnInit } from '@angular/core';
import { CarritoCompraService } from 'src/app/Services/carritoService/carrito-compra.service';
import { Producto } from 'src/app/interfaces/producto.model';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss'],
})
export class CarritoComprasComponent  implements OnInit {
  carritoLista: Producto[] = []

  constructor(private carritoService: CarritoCompraService) { }

  ngOnInit() {
    this.carritoLista = this.carritoService.obtenerCarrito();
  }

}
