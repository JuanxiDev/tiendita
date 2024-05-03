import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full'
  },
  {
    path: 'calculator',
    loadChildren: () => import('./Pages/calculator/calculator.module').then(m => m.CalculatorPageModule)
  },
  {
    path: 'sueldo',
    loadChildren: () => import('./Pages/sueldo/sueldo.module').then( m => m.SueldoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./Pages/customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./Pages/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'fakestore',
    loadChildren: () => import('./Pages/fakestore/fakestore.module').then( m => m.FakestorePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
