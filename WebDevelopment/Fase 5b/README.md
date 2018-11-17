# Second example Javascript Promises

In dit voorbeeld worden de verschillende functies verkort ingevoerd, onder andere door gebruik te maken van Lambda functies (arrow notation)

Om de ultieme korte inline "arrow function notation" te gebruiken, zijn hier slechts "functies" van één statement gebruikt:

```javascript
window.onload = initPage;

function initPage(){
  console.log(">> initPage ");
  var myPromise = new Promise(function(resolveFunc,rejectFunc){
      console.log(">> promiseBody ");

      var rnd = Math.random() *10;
      var rndString = rnd.toString();

      if (rnd < 5) resolveFunc(rndString);
      else rejectFunc("Random 5 or higher : "  + rndString);

      console.log("<< promiseBody ");

  });//end of Promise object creation

  myPromise.then(
      data =>    console.log("RESOLVE: Data retrieved : " + data)
      ,
      errorInfo =>  console.log("REJECT: Error : "+ errorInfo)
  );
  console.log("<< initPage ");
}//initPage
```

## Toelichting op de javascript

we zien nu in de tweede regel van de functie `initPage` dat er een Promise-object wordt aangemaakt, net als in het vorige voorbeeld.
```javascript
var myPromise = new Promise(function(resolveFunc,rejectFunc){ ..... });
```
Op de plaats van de puntjes `{ ..... } ` staat een hoeveelheid code die eindigt in het voorbeeld bij 
"`});//end of Promise object creation`". Echter, nu is de code niet losgemaakt maar inline. In het vorige voorbeeld stond:

```javascript
var myPromise = new Promise(promiseBody);
```
waarbij de parameter `promiseBody` de naam van een functie was met twee parameters:
```javascript
function promiseBody(resolveFunc, rejectFunc){ .... }
```

nu hebben we die functienaam vervangen door een *anonieme functie*, met dezelfde twee parameters.
```javascript
var myPromise = new Promise(function(resolveFunc,rejectFunc){ ..... });
```
Oke, we hebben nu dus een Promise-object met variabelenaam `myPromise` aangemaakt. Meer dan het declareren van een variabele
met een initiele waarde is er eigenlijk niet gebeurd. We hebben alleen de constructor aangeroepen van de Promise klasse
en als parameter een anonieme functie meegegeven (die toevallig ook nog een berg code bij zich heeft).

De volgende stap is de code van de Promise uitvoeren. Dat doen we door de functie `then` uit te voeren, met weer twee parameters:
de functies die de normale en fout-afhandeling voor hun rekening nemen. 

```javascript
  myPromise.then( .... );
```
Echter nu doen we dat ook met twee inline functies maar dan met 'arrow notation':
```javascript
  myPromise.then(
      data =>    console.log("RESOLVE: Data retrieved : " + data)
      ,
      errorInfo =>  console.log("REJECT: Error : "+ errorInfo)
  );//myPromise.then
```

Dit werkt als volgt: de eerste regels tussen de haakjes van de `then(...)` functie is een anonieme functie met één parameter
genaamd  `data` en een body van één statement `console.log(....)`. Eigenlijk staat er dit:

```javascript
  myPromise.then(
      function(data){console.log("RESOLVE: Data retrieved : " + data); }
      ,
      errorInfo =>  console.log("REJECT: Error : "+ errorInfo)
  );//myPromise.then
```

maar dan verkort. De indicatie `function` wordt weggelaten samen met de haakjes voor de parameters. Dit kan alleen als 
er slechts één parameter is! 

Voor de functie die de fout-situatie afhandeld is dit hetzelfde:
```javascript
  myPromise.then(
      function(data){console.log("RESOLVE: Data retrieved : " + data); }
      ,
      function(errorInfo) { console.log("REJECT: Error : "+ errorInfo); }
  );//myPromise.then
```
 
De komma die tussen de twee functies staat is nodig omdat we immers een functie (`myPromise.then(...)`) aanroepen die één of twee 
parameters nodig heeft! De verkorte notatie verdient vaak de voorkeur. Je zou het ook nog zo kunnen oplossen (een combinatie)
van de twee voorbeelden (zie de aanroep van `myPromise.then(....)`).

```javascript
window.onload = initPage;

function initPage(){
  console.log(">> initPage ");
  var myPromise = new Promise(function(resolveFunc, rejectFunc){
      console.log(">> promiseBody ");
    
      var rnd = Math.random() *10;
      var rndString = rnd.toString();
    
      if (rnd < 5) resolveFunc(rndString);
      else rejectFunc("Random 5 or higher : "  + rndString);
    
      console.log("<< promiseBody ");

  });

  myPromise.then(
      data      => myResolveFunction(data),
      errorInfo => myRejectFunc(errorInfo)
  );
  console.log("<< initPage ");
}//initPage

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
  * [Arrow notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
}
}
}
}