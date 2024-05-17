import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.model';
import { NewProductComponent } from 'src/app/Components/new-product/new-product.component';
import { CarritoCompraService } from 'src/app/Services/carritoService/carrito-compra.service';
import { ProductService } from 'src/app/Services/productos.service/product-service.service';
import { ComponentsModule } from '../components.module';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss'],
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private carrito: CarritoCompraService, private productoServicio: ProductService) { }


  ngOnInit() {
    this.productoServicio.getData().subscribe(data => {
      this.productos = data;
    }
    )
  }

  
  agregarCarrito(producto: Producto){
    this.carrito.agregarProductosComprados(producto)
  }

}
