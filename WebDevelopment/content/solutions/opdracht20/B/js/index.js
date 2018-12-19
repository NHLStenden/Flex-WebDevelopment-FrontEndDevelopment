"use strict";

import { MyCalculator } from "./classes/MyCalculator.js";
import { MyCalculator as MyStaticCalculator}  from "./lib/MyCalculator.js"

document.onload = initPage();

function initPage() {
    const calc = new MyCalculator(10);
    console.log(calc.Add(3).Subtract(5).Multiply(3).Value());

    console.log(MyStaticCalculator.Add(10,5));
    console.log(MyStaticCalculator.Subtract(10,5));
    console.log(MyStaticCalculator.Add(
        MyStaticCalculator.Multiply(10,5),
        MyStaticCalculator.Multiply(10,5)
    ));
}