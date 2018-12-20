# Opdracht 20 - Modules & Classes
In deze opdracht ga je je code beter organiseren in modules.

## Opdracht
Schrijf een klasse Calculator die geinitialiseerd wordt met één getal. Bij dat getal kun je een ander getal 
  * Optellen
  * Aftrekken
  * Vermenigvuldigen

verdere eisen:
  * aan de constructor wordt een basis getal meegegeven
  * er is een functie `Value()` die de huidige waarde opgeeft. 

De klasse moet verder chaining ondersteunen. Bijvoorbeeld: 
```javascript
calc.add(1).sub(2).multiply(3);
```

Een voorbeeld van het gebruik is dan:
```javascript
  var calc = new MyCalculator(10);
  calc.add(1).sub(2).multiply(3);
  Console.log(calc.Value());
```

Eisen aan de *opzet* van deze klasse:
  * zit in een eigen map en bestand, genaamd `/js/classes/MyCalculator.js`
  * wordt geimporteerd van het bestand   `/js/index.js`
  * wordt expliciet op naam geëxporteerd (`export class MyCalculator`)
  
  
## Referenties
  * [Google: JS Modules](https://developers.google.com/web/fundamentals/primers/modules)
  * [MDN: JS Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
  * [MDN: JS Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  * [MDN: Tree Shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)
  