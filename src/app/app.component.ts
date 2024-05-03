import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customer', url: '/customer', icon: 'person' },
    { title: 'Calculadora', url: '/calculator', icon: 'calculator' },
    { title: 'Sueldo', url: '/sueldo', icon: 'cash' },
    { title: 'Productos', url: '/product', icon: 'cart' },
    { title: 'Tienda', url: '/fakestore', icon: 'cart' }

  ];
  constructor() {}
}
