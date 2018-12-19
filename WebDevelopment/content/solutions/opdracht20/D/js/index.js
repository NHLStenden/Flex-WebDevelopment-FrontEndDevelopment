"use strict";

import { MyCalculator } from "./classes/MyCalculator.js";
import MyCalc  from "./lib/MyCalculator.js";

document.onload = initPage();

function initPage() {
    const calc = new MyCalculator(10);
    console.log(calc.Add(3).Subtract(5).Multiply(3).Value());

    console.log(MyCalc.Add(10,5));
    console.log(MyCalc.Subtract(10,5));
    console.log(MyCalc.Add(
        MyCalc.Multiply(10,5),
        MyCalc.Multiply(10,5)
    ));
}