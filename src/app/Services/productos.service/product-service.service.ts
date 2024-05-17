import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) { }

  productos: Producto[] = []

  getData(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url)
  }

  SetData(producto: Producto): Observable<any> {
    return this.http.post<any>(this.url, producto)
  }

  AgregarProducto(product: Producto) {
    this.productos.push(product)
  }
}
