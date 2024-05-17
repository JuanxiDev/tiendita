import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NewProductComponent } from './new-product/new-product.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [NewProductComponent, ListaProductosComponent, CarritoComprasComponent],
    exports: [NewProductComponent, ListaProductosComponent, CarritoComprasComponent]
})
export class ComponentsModule { }
