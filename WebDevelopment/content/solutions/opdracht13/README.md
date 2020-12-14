# Uitwerking opdracht 13
We gebruiken in dit geval de lange notaties van alle functies die we nodig hebben. 
  * resolve-functie
  * reject-functie
  * Promise-handler functie
  
De functie die opgestart wordt bij het laden van de pagina bevat alleen een variabele declaratie:
```javascript 
function initPage(){
  var myPromise = new Promise(myPromiseHandler);
}//initPage
```

In wezen zegt deze: maak een nieuw object aan, waarbij ik de constructor uitvoer met als parameter een referentie 
naar een functie. Let op: er staan geen haakjes achter deze `myPromiseHandler`, want we willen **niet** dat de functie
uitgevoerd wordt! We willen er alleen naar *verwijzen*!

Vervolgens schrijven we de 3 functies uit. Eerst de Promise-functie. Hier zit dus de uiteindelijke functionaliteit
zoals het ophalen van data, het bepalen van uitkomsten etc. We gebruiken hier een eenvoudige random-functie om te bepalen
of de functie successvol is.

```javascript
function myPromiseHandler(resolve, reject){
    //function body

    var getal = Math.random() * 10;

    var success = (getal > 5);

    if (success) resolve(getal.toString());
    else reject(getal.toString());
}//myPromiseHandler
```
De Resolve- en Reject-functies doen niks anders dan hun parameters naar de console loggen:

```javascript
function resolveFunction(data){
    console.log("resolved: " + data);
}//resolveFunction

function rejectFunction(errormessage){
    console.log("error:" + errormessage);
}//rejectFunction
```

We hebben nu de basis opbouw voor een script dat gebruik gaat maken van Promises. Ga nu verder met opdracht 14 om te kijken
hoe je deze code daadwerkelijk tot uitvoering laat komen. 

## Referenties
* [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [Random getallen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
