import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FakestorePageRoutingModule } from './fakestore-routing.module';

import { FakestorePage } from './fakestore.page';
import { NewProductComponent } from 'src/app/Components/new-product/new-product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FakestorePageRoutingModule
  ],
  declarations: [FakestorePage, NewProductComponent]
})
export class FakestorePageModule {}
