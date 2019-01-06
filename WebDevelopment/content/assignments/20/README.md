# Opdracht 20 - Modules & Classes
In deze opdracht ga je je code beter organiseren in modules. Tevens gaan we gebruik maken van de mogelijkheden om klassen
(`class`) te gebruiken.

Let op : niet alle browsers ondersteunen modules. Verder worden bepaalde taalconstructies pas mogelijk als je een javascript-bestand
als module laadt in plaats van als domme javascript.

### Declaratie van een klasse en methodes
In een klasse kunt je eenvoudig methodes declareren:
```javascript
  class MyNewClass {
    method1 (param1 ) { ...  }
    method2 (param1 ) { ...  }
    method3 (param1 ) { ...  }
    method4 (param1 ) { ...  }
  }
```

Het keyword `function`  hoef je hier niet te gebruiken dus! 

### Declaratie van klasse-variabelen
Als je variabelen in een klasse wilt gebruiken, dan maak je deze aan in de constructor:
```javascript
  class MyNewClass {
    constructor(a) {
      this.someVariable = 0;
      this.someString = 'some value!';
    }
  }
```

Let op de naam van de methode: deze heet simpelweg `constructor`, en is niet (zoals in veel talen) een methode met de naam
van de klasse.

### Static methodes
In javascript classes kun je ook gebruik maken van statische methodes. Dat zijn methodes die je kunt aanroepen zonder dat je
eerst een object moet maken (met `var newObject = new MyClass());`.
```javascript
  class MyNewClass {
    static helloWorld () {console.log("Hello World")};
  }
```

Deze methode is als volgt aan te roepen:

```javascript
  MyNewClass.helloWorld();
```


## Modules in Javascript
Met modules in Javascript kun je je code beter organiseren én het triggert bepaalt nieuw gedrag. 
  1. beter onderhoudbaar
  2. namespacing
  3. herbruikbaarheid
  4. tree-shaking
  5. strict mode staat standaard aan
  6. simpeler laden van javascript bestanden
  
  
De uitgebreide informatie kun je vinden via de referenties onderaan deze pagina. De korte toelichting volgt nu.

Om met de laatste te beginnen: je kunt in een javascript module aangeven welke andere modules je nodig hebt. Dus als je je
code slim organiseert, hoef je in je `<head>`-element nog maar een paar `<script>`-elementen op te nemen die een bestand laadt. 
Door met `imports` en `exports` te werken, weet de browser welke extra bestanden er geladen moeten worden. Slimme IDE's
herkennen dit principe en helpen je met het snel intypen van imports. Probeer het eens!

### Import en export
Alles wat je in een module naar buiten wilt brengen voor gebruik door anderen, moet je expliciet beschikbaar stellen
door middel van het statement `export`. Doe je dat niet, dan kan een ander jouw class, functie of variabelen niet gebruiken.
Er zijn nogal wat manieren om de export te regelen. Lees daarvoor het beste het MDN-artikel onderaan. 

Als je eenmaal een item hebt geëxporteerd, dan kan een andere module deze importeren. Een voorbeeld:

In het bestand MyClass.js staat het volgende:
```javascript
  export myClass {
    constructor (){ this.myVar = 0;}
  }
```
In het bestand `main.js` staat het volgende:
```javascript
  import { myClass } from "./MyClass.js";

  const newObject = new myClass();
```

Let goed op dat als je bestanden uit dezelfde map (directory) gebruikt, je altijd met `./` begint, anders zijn bestanden onvindbaar.

Om dit allemaal goed te laten werken is er één ding erg belangrijk! Je moet je javascript-bestand op een andere manier
laden in je `<head>`:
```html
  <head>
    <title>Module voorbeeld 1</title>
    <script type="module" src="main.js"></script>
  </head>
```
Let op get attribuut `type`: hier staat geen `text/javascript` maar `module`. 

## Cascading export / import
Stel nu dat in het vorige voorbeeld de klasse 'myClass' zaken van een andere module importeert. Bijvoorbeeld (bestand `MyClass.js`):
```javascript
  import { someOtherClass}  from "./someOtherClass.js";

  export myClass {
    constructor (){ this.myVar = new someOtherClass();}
  }
```

Onze `<html>` ziet er dan als volgt uit:
```html
  <head>
    <title>Module voorbeeld 2</title>
    <script type="module" src="main.js"></script>
  </head>
```
Nu denk je misschien: "dat klopt niet! Je moet ook het bestand someOtherClass.js opnemen in je head". Maar dat hoeft dus niet!
De browser ziet de import en zorgt zelf wel dat de benodigde bestanden geladen worden.  
  

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
  

## Extra opdracht
Kijk ook eens naar de mogelijkheid om een rekenmachine-klasse te bouwen met `static` methodes. 
  
## Referenties
  * [Google: JS Modules](https://developers.google.com/web/fundamentals/primers/modules)
  * [MDN: JS Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
  * [MDN: JS Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  * [MDN: Tree Shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)
  * [MDN: Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
  
  