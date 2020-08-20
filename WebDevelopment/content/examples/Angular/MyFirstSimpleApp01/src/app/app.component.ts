import {Component, OnInit} from '@angular/core';
import {convertToParamMap} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Calculator';

  result: string = '';
  number1: number;
  number2: number;
  hasFirstNumber: boolean;
  operator: string;
  history: number[];

  ngOnInit(): void {
    this.hasFirstNumber = false;
    this.result = '0';
    this.history = [];
  }

  public AddDigit(digit: string) {
    if (Number(this.result) === 0) {
      this.result = digit;
    } else {
      this.result = this.result + digit;
    }
    this.hasFirstNumber = true;
  }

  /**
   * Voegt een operator toe (plus, min, delen etc).
   */
  public AddOperation(operation: string) {

    this.number1 = Number(this.result);

    this.result = '0';
    this.operator = operation;

    this.AddToHistory(this.number1);

  }

  /**
   * Bereken het resultaat
   */
  public CalculateResult() {
    this.number2 = Number(this.result);
    var localResult: number;
    var operationComplete: boolean = true;

    switch (this.operator) {
      case "+":
        localResult = (this.number1 + this.number2);
        break;
      case "-":
        localResult = (this.number1 - this.number2);
        break;
      case "/":
        if (this.number2 == 0 ) {
          operationComplete = false;
          alert("Division by zero!");
        }
        localResult = (this.number1 / this.number2);
        break;
      case "*":
        localResult = (this.number1 * this.number2);
        break;
      default:
        alert("Er is geen bewerking bekend");
        operationComplete = false;
        break;
    }
    if (operationComplete) {

      localResult = Number(localResult.toFixed(3));

      this.AddToHistory(this.number2);
      this.AddToHistory(localResult);
      this.operator = "";
      this.number1 = localResult;
      this.result = localResult.toString();
    }

  }// CalculateResult()

  AddToHistory(item: number) {

    this.history= [item, ...this.history];
  }

  replaceFromHistory(item: number) {
    this.result = item.toString();
  }

  Backspace(){
    this.result = this.result.substr(0,this.result.length-1);
    if (this.result  === '') this.result = '0';
  }
}
