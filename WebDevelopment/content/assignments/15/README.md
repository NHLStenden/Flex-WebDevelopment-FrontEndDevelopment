# Opdracht 15 - Promises 3 - Chaining

We gaan in deze opdracht verder met Promises. We gaan kijken naar `chaining`  waarbij je meerdere promises achter elkaar
kunt verwerken, en de data uit resolve- en reject-functies kunt doorgeven.

# Opdracht A
In de vorige opdracht stuurden we alleen wat informatie naar de console in de `resolveFunction` en `rejectFunction`. 
Het is echter gebruikelijk dat deze functies gegevens terugsturen. Dus verander de functies zodat ze de data die ze
binnenkrijgen ook weer terugsturen (`return ....`), maar met een kleine verandering door er bijvoorbeeld iets
aan toe te voegen.

# Opdracht B
Nu we resultaten terugkrijgen van deze functies gaan we die informatie doorgeven aan een volgende `then`-functie:
```javascript
  myPromise.then(.....).then(....);
``` 

De vraag is natuurlijk wat er op de verschillende stippeltjes moet komen te staan.

## Referenties
[Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
[Promises - chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#Chaining)