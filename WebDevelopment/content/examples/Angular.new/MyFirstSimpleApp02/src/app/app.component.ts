import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Calculator';

  result: string = "";
  number1: number;
  number2: number;
  hasFirstNumber: boolean;
  operator: string;
  history: Number[];

  ngOnInit(): void {
    this.hasFirstNumber = false;
    this.result = "0";
    this.history = [];
  }

  onClickButton(event: MouseEvent){
    var element: HTMLElement = event.target as HTMLElement;

    const classes = element.classList;
    const value = element.innerText;

    if (classes.contains("digit")){
      this.AddDigit(value);
    }
    else if (classes.contains("operator")){
      this.AddOperation(value);
    }
    else if (classes.contains("backspace")){
       this.Backspace();
    }
    else if (classes.contains("result")){
      this.CalculateResult();
    }


  }

  onKeypress(event: KeyboardEvent){
    var key = event.key;

    if (["0","1","2","3","4","5","6","7","8","9","."].indexOf(key) > -1){
      this.AddDigit(key);
    }
    else if (["+","-","*","/"].indexOf(key)> -1 ){
      this.AddOperation(key);
    }
    else if (key == "=" || key == "Enter") {
      this.CalculateResult();
    }
  }

  public AddDigit(digit: string) {
    if (Number(this.result) == 0) {
      this.result = digit;
    } else {
      this.result = this.result + digit;
    }
    this.hasFirstNumber = true;
  }

  /**
   * Voegt een operator toe (plus, min, delen etc).
   * @param operation
   */
  public AddOperation(operation: string) {

    this.number1 = Number(this.result);

    this.result = "0";
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

  AddToHistory(item: Number) {

    this.history= [item, ...this.history];
  }

  replaceFromHistory(item: string){
    this.result = item.toString();
  }

  Backspace(){
    this.result = this.result.substr(0,this.result.length-1);
    if (this.result  == "") this.result = "0";
  }
}
