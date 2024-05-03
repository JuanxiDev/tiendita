import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  nombre: string = "Pablito";
  apellido: string = "Mijo";
  id: number = 64684135168;
  email: string = "pablitomijo@tupapa.com";
  celular: number = 31535168;
  direccion: string = "cra 89 # 73-42";
  puesto: string = "chismoso";


  constructor() { }

  ngOnInit() {
    console.log("si carga");
  }

}
