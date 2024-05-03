import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  constructor() { }
  ngOnInit(): void {
    console.log("si funka")
  }

  v1: string = " ";
  v2: string = " ";
  r = '';

  calcular(operation: string) {
    switch (operation) {
      case '+':
        this.r = (parseInt(this.v1) + parseInt(this.v2)).toString();
        break;
      case '-':
        this.r = (parseInt(this.v1) - parseInt(this.v2)).toString();
        break;
      case '*':
        this.r = (parseInt(this.v1) * parseInt(this.v2)).toString();
        break;
      case '/':
        this.r = (parseInt(this.v1) / parseInt(this.v2)).toString();
        break;
      case '%':
        this.r = (parseInt(this.v1) % parseInt(this.v2)).toString();
        break;
      case '!':
        this.r = this.factorial(parseInt(this.v1)).toString();
        break;
      case 'Clear':
        this.r = '';
        this.v1 = " "
        this.v2 = " "
        break;
      case 'Fib':
        this.fibonacci();
        break;
      case 'Par':
        this.r = `${this.v1} ${this.pares(parseInt(this.v1)) ? 'es par' : 'es impar'}, ${this.v2} ${this.pares(parseInt(this.v2)) ? 'es par' : 'es impar'}`;

        break;
      default:
        this.r = '';
    }
  }

  factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }

  fibonacci() {
    this.r = '';
    if (parseInt(this.v1) < 0) {
      this.r = 'Value must be greater than 0';
      return;
    }
    let num1 = 0, num2 = 1, nextTerm;
    for (let i = 1; i <= parseInt(this.v1); i++) {
      this.r += num1 + ' ';
      nextTerm = num1 + num2;
      num1 = num2;
      num2 = nextTerm;
    }
  }

  pares(n: number): boolean {
    return n % 2 === 0;
  }

}
