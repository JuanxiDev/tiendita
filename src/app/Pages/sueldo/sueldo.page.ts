import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sueldo',
  templateUrl: './sueldo.page.html',
  styleUrls: ['./sueldo.page.scss'],
})
export class SueldoPage implements OnInit {

  constructor() { }

  sueldo: string = " "
  sueldoFin: string = " "
  retefuente = " "
  solidario = " "
  salud = " "
  pension = " "
  bono = " "

  ngOnInit() {
    console.log("si funka x2")
  }


  operaciones() {
    switch (true) {
      case parseInt(this.sueldo) > 4000000:
        this.retefuente = (parseInt(this.sueldo) * 0.04).toString();
        this.solidario = "80.000";
        this.bono = "100000";
        this.salud = (parseInt(this.sueldo) * 0.03).toString();
        this.pension = (parseInt(this.sueldo) * 0.03).toString();
        this.sueldoFin = (parseInt(this.sueldo) - parseInt(this.retefuente) - 80000 - parseInt(this.salud) - parseInt(this.pension) + 100000).toString();
        break;
      case parseInt(this.sueldo) < 2000000:
        console.log("caso2");        
        this.bono = "250000";
        this.salud = (parseInt(this.sueldo) * 0.03).toString();
        this.pension = (parseInt(this.sueldo) * 0.03).toString();
        this.sueldoFin = (parseInt(this.sueldo) + 250000- parseInt(this.salud) - parseInt(this.pension)).toString();
        break;
      case parseInt(this.sueldo) >= 2000000 && parseInt(this.sueldo) < 3500000:
        console.log("caso3");
        this.bono = "200000";
        this.salud = (parseInt(this.sueldo) * 0.03).toString();
        this.pension = (parseInt(this.sueldo) * 0.03).toString();
        this.sueldoFin = (parseInt(this.sueldo) + 200000 - parseInt(this.salud) - parseInt(this.pension)).toString();
        break;
      case parseInt(this.sueldo) >= 3500000:
        console.log("caso4");
        this.bono = "100000";
        this.salud = (parseInt(this.sueldo) * 0.03).toString();
        this.pension = (parseInt(this.sueldo) * 0.03).toString();
        this.sueldoFin = (parseInt(this.sueldo) + 100000- parseInt(this.salud) - parseInt(this.pension)).toString();
        console.log(1000);
        break;
      default:
        break;
    }

  }


}
