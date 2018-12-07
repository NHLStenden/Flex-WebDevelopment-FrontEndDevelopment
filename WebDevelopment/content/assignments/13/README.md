# Opdracht 13 - Promises 1

We gaan in deze opdracht verder met asynchrone functies. We maken zelf een functie die 5 seconden wacht en dan een resultaat
teruggeeft. We gebruiken daarvoor een Promise-object. Een promise kun je aanmaken met `new`:

```javascript

var myPromise = new Promise(....);
```

De constructor van Promise wil één functie als parameter hebben. Dus bijvoorbeeld zoals hier onder:
```javascript
function myPromiseHandler(....){
    //function body
}

var myPromise = new Promise(myPromiseHandler);
```

Deze zogenaamde Promise-handler functie heeft echter ook weer twee parameters nodig:
  * een functie die je aanroept als de functie successvol is in zijn doel (bijv ophalen van gegevens)
  * een functie die je aanroept als de functie tegen een fout aanloopt.
  
De eerste functie noemen we in het jargon van Promises de `resolve`-functie. De tweede heet de `reject`-functie. Dit ziet
er dan uit als volgt:

```javascript

function resolveFunction(data){
    // function body 
}

function rejectFunction(errormessage){
    // function body
}

function myPromiseHandler(resolve, reject){
    //function body
    .....
    if (success) resolve(data);
    ...
    if (error) reject(errormessage);
    ...
}

var myPromise = new Promise(myPromiseHandler);
```

Daarbij zijn de statements `if (success)` en `if (error)` natuurlijk erg afhankelijk van hoe jij de functie hebt geschreven.
 
Dit wordt nogal eens verkort weergegevens zoals onderstaande:
```javascript
var myPromise = new Promise(function(resolve, reject){
    //function body
    .....
    if (success) resolve(data);
    ...
    if (error) reject(errormessage);
    ...
});
```

Dat is allemaal heel erg mooi, dat we nu weten wat er nodig is om een Promise te maken. Maar hoe werkt het nu? Wanneer
wordt nu als die code uitgevoerd? Het antwoord is simpel: bij het aanmaken van de Promise wordt de functie die aan de 
constructor meegegeven wordt (`promiseHandler`) meteen uitgevoerd. Dus ondanks dat er geen () achter de functie staat, wordt 
deze functie wél door de constructor uitgevoerd!

## Opdracht
Gebruik bovenstaande code en schrijf een functie die het Promise-Object aanmaakt. Zorg dat alles zonder foutmelding
in de browser uitgevoerd wordt. Gebruik de functie "Math.rand()" om een willekeurig getal te genereren tussen 1 en 10:
```javascript
  var getal = Math.random()* 10;
```

Als het getal boven de 5 uitkomt, roep je de Resolve-functie aan in jet promise-handler. In het andere geval geef
je een foutmelding. Als parameter voor de resolve en reject-functies geef je het gevonden getal mee. 
```javascript
  if (...) resolve(getal.toString());
```

Als je dit werkend hebt, probeer dan eens na te gaan wat er gebeurt als je de functie InitPage wijzigt door het myPromise
naar de console te sturen: 

```javascript
function initPage(){
  var myPromise = new Promise(myPromiseHandler);
  console.log(myPromise);
}//initPage

```

## Referenties
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
[Random getallen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
