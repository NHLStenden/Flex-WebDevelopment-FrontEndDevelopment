import {MyCalculator} from "./lib/MyCalculator.js";

$(document).ready(initPage);

function initPage(){
  const calc = new MyCalculator(10);
  calc.Add(10).Multiply(5).Subtract(5);
  console.log(calc.Value());
}//initPage