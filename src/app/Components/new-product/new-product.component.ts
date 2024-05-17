import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.model';
import { ComponentsModule } from '../components.module';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {

  idInput: number;
  titleInput: string;
  priceInput: number;
  descriptionInput: string;
  categoryInput: string;
  imageInput: string;
  ratingInput: number;
  countInput: number;

  @Input()
  mensajePadre: string;

  @Output()
  eventoCreateProduct = new EventEmitter<Producto>();


  constructor() { }

  ngOnInit() { }

  saveProduct() {
    let newProduct: Producto = {
      id: this.idInput,
      title: this.titleInput,
      price: this.priceInput,
      description: this.descriptionInput,
      category: this.descriptionInput,
      image: this.imageInput,
      rating: {
        rate: this.ratingInput,
        count: this.countInput
      }
    }

    this.eventoCreateProduct.emit(newProduct)
    this.idInput = 0;
    this.titleInput = " ";
    this.priceInput = 0;
    this.descriptionInput = " ";
    this.categoryInput= " ";
    this.imageInput= " ";
    this.ratingInput = 0;
    this.countInput = 0;
  }

}
