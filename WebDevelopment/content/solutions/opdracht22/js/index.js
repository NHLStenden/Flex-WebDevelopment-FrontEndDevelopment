import {MyCalculator} from "./lib/MyCalculator.js";

$(document).ready(initPage);

function initPage(){
  const calc = new MyCalculator(10);
  calc.Add(14).Multiply(5).Subtract(5);
  console.log(calc.Value());
  console.log('hello world 2222');
}//initPage