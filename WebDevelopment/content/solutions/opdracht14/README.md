# Uitwerking opdracht 14

De uitwerking van opdracht 14 is eenvoudig. In onderstaande voorbeeld de verkorte en lange notatie:
```javascript
function initPage(){
  var myPromise = new Promise(myPromiseHandler);
  
  // lange notatie
  myPromise.then(
      function(data){resolveFunction(data)},
      function(errormessage){rejectFunction(errormessage)}
   );
  
  // laat de status en het resultaat zien.
  console.log(myPromise);

  // nogmaals een .then() aanroep. wat gebeurt er nu?
  myPromise.then(
        data => resolveFunction(data),
        errormessage => rejectFunction(errormessage)
    );
    console.log(myPromise);

}//initPage
```

Wat opvalt in de console dat de tweede `.then()` aanroep gewoon nogmaals hetzelfde doet. De status van de het Promise-
object is immers al lang bepaald bij het aanroepen van de constructor!

Als je goed kijkt dan lijkt er iets vreemds aan de hand te zijn: de volgorde van de functies klopt niet!
```text
Promise {<resolved>: "6.178847811251602"}
Promise {<resolved>: "6.178847811251602"}
resolved: 6.178847811251602
resolved: 6.178847811251602
```

Je zou verwachten :
```text
Promise {<resolved>: "6.178847811251602"}
resolved: 6.178847811251602
Promise {<resolved>: "6.178847811251602"}
resolved: 6.178847811251602
```

De Resolve- of Reject-functies worden namelijk op hun beurt ook weer **Asynchroon** aangeroepen! Om dit probleem te 
tackelen gaan we in de volgende opdracht kijken naar *Chaining*. 


## Referenties
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
[Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
