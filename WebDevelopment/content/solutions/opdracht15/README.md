# Uitwerking opdracht 15
Voor deze opdracht zijn er 3 varianten uitgewerkt. 

## Variant A 
Hier wordt gewerkt met alle functies helemaal uitgeschreven. De Resolve- en Reject-functies doen een eenvoudige return
van de ontvangen parameters.

```javascript
function resolveFunction(data){
    console.log("resolved: " + data);
    return 100+data;
}//resolveFunction

function rejectFunction(errormessage){
    console.log("error:" + errormessage);
    return "~error="  + errormessage;
}//rejectFunction

```

De uitvoer:
```text
Promise {<resolved>: "5.212399826466241"}
resolved: 5.212399826466241
then 2 :: resolve ==> 1005.212399826466241
```
 
Wat verder opvalt in de uitvoer zijn twee zaken:
  * de uitvoer op de console van de *chaining* van de `then`-functies zorgt voor de volgorde van de 
  uitvoer die we verwachten.
  * de uitvoer op de console van de `console.log(myPromise);` komt als eerste
  
Hieruit blijkt dus weer dat de uitvoering van de functies in de `then`-blokken, asynchroon wordt uitgevoerd ten opzichte
van de hoofd-thread. Echter, tussen de onderlinge `then`-blokken wordt de volgorde van de uitvoering wel gegarandeerd. 

## Variant B 
Dit is de verkorte versie. In de `then`-functies voor Resolve & Reject worden eenvoudige bewerkingen gedaan en gebruik
gemaakt van de Arrow-notation:

```javascript
  myPromise.then(
      data =>         {return 100 + data},
      errormessage => {return "~error=" + errormessage }
   ).then(
      data =>         console.log("then 2 :: resolve ==> " + data),
      errormessage => console.log("then 2 :: reject ==> " + errormessage)
    );
```

De eerste `then` gebruikt beide functies (Resolve & Reject). Let op de komma achter de eerste functie! Dit is namelijk
de parameterscheiding van de twee functies die de `then` verwacht als parameters. 

Verder wordt er in verborgen vorm nóg een verkorting toegepast: de directe return in de eerste `then`-functie doet iets 
bijzonders. Deze pakt het teruggegeven in een nieuw Promise-Object en neemt de status over van de promise vanwaar
uit deze uitgevoerd wordt. Dus als de Reject-functie aangeroepen wordt, dan gebeurt er eigenlijk dit:
```javascript
  return new Promise(function(resolve, reject){
      reject("#error! " + errormessage);
  }); 
```

In variant C is deze vorm netjes uitgewerkt.

## Variant C 
Deze variant is een tussenvorm van de beide andere varianten. Hier wordt expliciet het resultaat van de eerste `then`
-functie en Resolve of Reject, ingepakt in een nieuw Promise-object, waarvan meteen weer de juiste Resolve of Reject functie 
wordt aangeroepen.

```javascript
  myPromise.then(
       data         => { return new Promise((resolve)         => resolve( 100+data ))} ,
       errormessage => { return new Promise((resolve, reject) => reject("#error! " + errormessage))}
   ).then(
        data => console.log("then 2 :: resolve ==> " + data),
        errormessage => console.log("then 2 :: reject ==> " + errormessage)
    );
```

Let op de verkorte notatie van een functie met 2 parameters:
```javascript
  return new Promise((resolve, reject) =>{
      reject("#error! " + errormessage);
  }); 
```
in plaats van 
```javascript
  return new Promise(function(resolve, reject) {
      reject("#error! " + errormessage);
  }); 

```


## Referenties
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
