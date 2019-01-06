# Opdracht 20 - Modules & Classes 
Er zijn 4 varianten uitgewerkt die vooral een indruk geven van hoe je met de imports om kunt gaan. 

## Variant A
Eerst iets over de verschillen in de twee klassen. De eerste klasse is een redelijk normale klasse met gewone methoden:

```javascript
    constructor(a) { this.result = a; }
    Add(a)      {this.result+=a; return this;}
    Subtract(a) {this.result-=a; return this;}
    Multiply(a) {this.result*=a; return this;}

    Value() {return this.result;}
```
Deze definieert een klasse-variabele genaamd `result`. Door met de prefix `this` te werken is de variabele alleen binnen
de klasse-instanties beschikbaar. Door methoden als `Add` of `Multiply` aan te roepen, kunnen we eenvoudig deze klasse-variabele
`this.result` aanpassen. Er wordt steeds alleen een nieuwe waarde meegegeven voor de berekening.

De waarde kunnen we uiteindelijk opvragen met de `Value()`-methode. 

### Chaining
Let op: de methoden `Add`, `Subtract` en `Multiply` geven een waarde `this` als resultaat terug. Daardoor kunnen we 
eenvoudig `chaining` toepassen:
```javascript
    const calc = new MyCalculator(10);
    calc.Add(3).Subtract(5).Multiply(3);
```

In plaats van 
```javascript
    const calc = new MyCalculator(10);
    calc.Add(3);
    calc.Subtract(5);
    calc.Multiply(3);
```

### Static methoden
De tweede klasse (MyStaticCalculator) laat zien hoe je met static-methodes kunt werken. 

```javascript
    static Add(a,b)      { return a+b}
    static Subtract(a,b) { return a-b}
    static Multiply(a,b) { return a*b}
```

In het gebruik zien we het volgende verschil. Eerst de normale manier waarbij eerst een nieuwe instantie ("object") van de klasse 
wordt gemaakt :
```javascript
    const calc = new MyCalculator(10);
    console.log(calc.Add(3).Subtract(5).Multiply(3).Value());
```

versus de statische methode waarbij de klassenaam wordt gebruikt zonder eerst eerst een instantie van de klasse te maken:
```javascript
    console.log(MyStaticCalculator.Add(10,5));
    console.log(MyStaticCalculator.Subtract(10,5));
```

### module bestanden 
Deze variant plaatst de beide klassen in één map (directory), waardoor ze een aparte bestandsnaam moeten hebben.

De exports zien er als volgt uit:
```javascript
  export class MyCalculator { ... }
```
en
```javascript
  export class MyStaticCalculator { ... } 
```

De imports zien er als volgt uit:
```javascript
    import { MyCalculator }      from "./classes/MyCalculator.js";
    import { MyStaticCalculator} from "./classes/MyStaticCalculator.js"
```

## Variant B
Deze variant plaatst de beide klassen in een eigen map, waardoor ze een gelijke bestandsnaam kunnen hebben.
De exports zien er als volgt uit:

### classes/MyCalculator.js
```javascript
    export class MyCalculator { ... }
```
### lib/MyCalculator.js
```javascript
    export class MyCalculator { ... }
```

en zijn daarmee identiek! De imports zien er als volgt uit:
```javascript
import { MyCalculator } from "./classes/MyCalculator.js";
import { MyCalculator as MyStaticCalculator}  from "./lib/MyCalculator.js"
```
Let op hoe de tweede import de class uit de directory `lib` hernoemt naar `MyStaticCalculator` waardoor deze bruikbaar wordt
als aparte class en er geen naamgevingsconflicten ontstaan. 

## Variant C
Deze variant plaatst de beide klassen in een eigen map, waardoor ze een gelijke bestandsnaam kunnen hebben.
De exports zien er als volgt uit:
### classes/MyCalculator.js
```javascript
export class MyCalculator { ... }
```
### lib/MyCalculator.js

```javascript
export class MyCalculator { ... }
```

Echter, hier wordt de import anders vormgegeven:
```javascript
import { MyCalculator } from "./classes/MyCalculator.js";
import * as MyCalc  from "./lib/MyCalculator.js";
```
De tweede import importeert de hele module als **prefix** beschikbaar wordt. Een statement als onderstaande wordt dan mogelijk:
```javascript
  MyCalc.MyCalculator.Add(10,5);
```

## Variant D
Deze variant plaatst de beide klassen in een eigen map, waardoor ze een gelijke bestandsnaam kunnen hebben.
De exports zien er als volgt uit:
### classes/MyCalculator.js
```javascript
export class MyCalculator { ... }
```
### lib/MyCalculator.js

```javascript
export default class MyCalculator { ... }
```

Echter, hier wordt de import nog weer anders vormgegeven:
```javascript
import { MyCalculator } from "./classes/MyCalculator.js";
import MyCalc  from "./lib/MyCalculator.js";
```

Omdat de module `"./lib/MyCalculator.js"` hier een **default** exporteert, kan de import op deze wijze worden vormgegeven. 
Ook hier is de hele module weer als **prefix** beschikbaar wordt. Een statement als onderstaande wordt dan mogelijk:
```javascript
  MyCalc.MyCalculator.Add(10,5);
```


## Referenties
  * [Google: JS Modules](https://developers.google.com/web/fundamentals/primers/modules)
  * [MDN: JS Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
  * [MDN: JS Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  * [MDN: Tree Shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)
  * [MDN: Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
