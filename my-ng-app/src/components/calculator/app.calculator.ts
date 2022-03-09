import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './app.calculator.html',
  styleUrls: ['./app.calculator.css'],
})
export class CalculatorComponent {
  str: string;

  constructor() {
    this.str = '';
  }

  add(num1: number, num2: number) {
    this.str = '' + (num1 + num2);
  }

  subtract(num1: number, num2: number) {
    this.str = '' + (num1 - num2);
  }

  multiply(num1: number, num2: number) {
    this.str = '' + num1 * num2;
  }

  divide(num1: number, num2: number) {
    this.str = '' + num1 / num2;
  }

  power(num1: number, num2: number) {
    this.str = '' + Math.pow(num1, num2);
  }

  root(num1: number) {
    this.str = '' + Math.sqrt(num1);
  }

  addToStr(event: any) {
    if (event.target.value === 'sqrt') {
      let temp = this.str;
      this.str = '';
      this.str += `${event.target.value}(${temp})`;
      return;
    }
    if (event.target.value === 'clear') {
      this.str = '';
      return;
    }
    if (event.target.value === '=') {
      if (this.str.includes('+')) {
        this.add(
          Number(this.str.split('+')[0]),
          Number(this.str.split('+')[1])
        );
        return;
      }
      if (this.str.includes('-')) {
        this.subtract(
          Number(this.str.split('-')[0]),
          Number(this.str.split('-')[1])
        );
        return;
      }
      if (this.str.includes('x')) {
        this.multiply(
          Number(this.str.split('x')[0]),
          Number(this.str.split('x')[1])
        );
        return;
      }
      if (this.str.includes('/')) {
        this.divide(
          Number(this.str.split('/')[0]),
          Number(this.str.split('/')[1])
        );
        return;
      }
      if (this.str.includes('^')) {
        this.power(
          Number(this.str.split('^')[0]),
          Number(this.str.split('^')[1])
        );
        return;
      }
      if (this.str.includes('sqrt')) {
        this.root(Number(this.str.slice(5, -1)));
        return;
      }
    }
    this.str += event.target.value;
  }
}
