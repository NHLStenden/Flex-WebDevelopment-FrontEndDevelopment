"use strict";

import { MyCalculator } from "./classes/MyCalculator.js";
import * as MyCalc  from "./lib/MyCalculator.js";

document.onload = initPage();

function initPage() {
    const calc = new MyCalculator(10);
    console.log(calc.Add(3).Subtract(5).Multiply(3).Value());

    console.log(MyCalc.MyCalculator.Add(10,5));
    console.log(MyCalc.MyCalculator.Subtract(10,5));
    console.log(MyCalc.MyCalculator.Add(
        MyCalc.MyCalculator.Multiply(10,5),
        MyCalc.MyCalculator.Multiply(10,5)
    ));
}