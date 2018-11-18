# First example Javascript Promises

Een Promise is een object dat je kunt gebruiken om een functie mee uit te laten voeren die normaliter in de achtergrond zijn werk uitvoert.
Voorbeelden:
  * Timers 
  * HTTP-requests
  * Async-functies 

Je belooft ("to promise") dat als de functie klaar is, je afhankelijk van het resultaat een ander stuk code laat uitvoeren. 
Er zijn twee mogelijke uitkomsten van zo'n functie:
  * een foutsituatie
  * een normaal verloop van de functie
  
In elk van de genoemde situaties wordt vervolgcode uitgevoerd. In de eerste situatie noemen we dat de **'Reject'**-functie. In het
geval de functie normaal verloopt noemen we de vervolgfunctie de **'Resolve'** functie. 
Een [voorbeeld](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise):

```javascript
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]

```

In de eerste regel wordt een nieuw Promise-object gemaakt. Aan de constructor van dat object wordt een nieuwe functie 
meegegeven, die bij het aanroepen twee parameters verwacht:
  * resolve-functie
  * reject-functie
  
Tot zover nog niks bijzonders. We hebben nu een Promise object wat in wezen nog niks doet! De code in regel 2 t/m 4 doet nog niks.
Pas in regel 7 wordt de code daadwerkelijk uitgevoerd. Dat werkt als volgt: door de functie `then` uit te voeren wordt de opgegeven
functie uitgevoerd.

Merk op dat door de functie `then` uit te voeren, ook twee parameters meegegeven worden: de `resolve` en de `reject`-parameters.
Als de functie normaal verloopt, moet je code de functie `resolve` aanroepen. Bij de aanroep van de `resolve` functie moet je
een parameter meegeven. Deze parameter bevat de gegevens die je terug wilt sturen naar de `then` functie.

Hetzelfde geldt voor de `reject` functie: als je functie tegen een fout aanloopt, dan roep je de `reject` functie aan met
(normaal gesproken) informatie over de foutmelding als parameter, zodat de aanroepende `then`-functie geinformeerd kan worden
over het hoe en waarom het fout loopt.

Wat gebeurt er nu eigenlijk?
  * bij het aanmaken van het Promise object maak je een stuk code dat later uitgevoerd wordt
  * bij het uitvoeren van de `then` functie geef je één of twee functies als parameters 
    * als je één functie opgeeft dan is dat de `resolve`
    * als je twee functies opgeeft is de eerste de `resolve` en de tweede de `reject`
    
In onderstaande functie wordt e.e.a. uitgelegd met allerlei losse functies. In het tweede voorbeeld gaan we de functie verkorten.

```javascript
window.onload = initPage;

function initPage(){
  console.log(">> initPage ");
  var myPromise = new Promise(promiseBody);

  myPromise.then(myResolveFunction,myRejectFunc);
  console.log("<< initPage ");
}

function promiseBody(resolveFunc, rejectFunc){
    console.log(">> promiseBody ");

    var rnd = Math.random() *10;
    var rndString = rnd.toString();

    if (rnd < 5) resolveFunc(rndString);
    else rejectFunc("Random 5 or higher : "  + rndString);

    console.log("<< promiseBody ");
}//promiseBody


function myResolveFunction(data){
    console.log(">> myResolveFunction ");
    var div = document.getElementById("container");
    div.innerText = "New data: " + data;
    console.log("Data retrieved : " + data);
    console.log(">> myResolveFunction ");
}//myResolveFunction


function myRejectFunc(errorInfo){
    console.log(">> myRejectFunc ");
    var div = document.getElementById("container");
    div.innerText = "Error ! : " + errorInfo;
    console.log(errorInfo);
    console.log("<< myRejectFunc ");
}//myRejectFunc
```
## Referenties
  * [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
  * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [Callback hell](http://callbackhell.com/)