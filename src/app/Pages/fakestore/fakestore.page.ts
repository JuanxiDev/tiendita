import { Component, OnInit } from '@angular/core';
import { Producto } from './producto.model';
import { NewProductComponent } from 'src/app/Components/new-product/new-product.component';

@Component({
  selector: 'app-fakestore',
  templateUrl: './fakestore.page.html',
  //styleUrls: ['./fakestore.page.scss'],
})
export class FakestorePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
