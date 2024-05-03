import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FakestorePage } from './fakestore.page';

const routes: Routes = [
  {
    path: '',
    component: FakestorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FakestorePageRoutingModule {}
