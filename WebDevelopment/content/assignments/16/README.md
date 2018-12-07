# Opdracht 16 - Canvas

In deze opdracht maken we een canvas en gaan we eenvoudige objecten tekenen. Het canvas is een HTML element dat je
kunt gebruiken om objecten als cirkels, vierkanten en krommen op te tekenen. Een voorbeeld:
```html
<body>
    <div class="container">
        <canvas id="myCanvas" width="300px" height="300px"></canvas>
    </div>
</body>
```

Zo'n `<canvas>`-element kun je in Javascript natuurlijk eenvoudig terugvinden via jQuery of vanilla Javascript:
```javascript
  var myCanvas = $("#myCanvas");
  var myCanvas = document.getElementById("myCanvas");
```

Om te kunnen tekenen heb je een zogenaamde *context* nodig: een 2 dimensionale of 3 dimensionale context. Als je die 
eenmaal hebt, kun je met standaard functies zaken tekenen.  

```javascript
    var ctx = canvas.getContext("2d");
```   
Er zijn ook de nodige frameworks die je hier mee kunnen helpen, bijvoorbeeld om te kijken of er op een object geklikt 
is, en om in lagen te werken.

## Opdracht
Maak een canvas in de index.html en teken hier een aantal objecten op:
  * rood vierkant met dimensies 75x75 op positie (10,10)
  * blauw cirkel met diameter 50 op positie (50,20) Gebruik de functie `arc`
  * een rechthoekige driehoek op positie (100,100) met korte zijden van 50. Gebruik de `path`-functie moveTo 

Als je tekening klaar is, zoom dan eens in en kijk wat het effect is.

## Referenties
[Canvas W3 Schools](https://www.w3schools.com/graphics/canvas_drawing.asp)
[Canvas MDN](https://developer.mozilla.org/nl/docs/Web/API/Canvas_API/Tutorial)