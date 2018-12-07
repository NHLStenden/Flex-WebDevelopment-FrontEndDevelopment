# Opdracht 06 - DOM & Events - this & event parameter
In deze opdracht gaan we kijken of we kunnen achterhalen welk item er precies aangeklikt is. We gebruiken
hiervoor de variabele `this` en de functie parameter `evt`. 

Gebruik de code uit oplossing 05 ([Oplossing 05](../../solutions/opdracht05)). Dump in de console de waarde
van twee variabelen en inspecteer deze:
```javascript
  console.log(evt);
  console.log(this);
```

Nu je weet wat de waarden zijn van deze variabelen, kun je op zoek naar de text van het `<LI>`-item dat is 
aangeklikt. Verander de `alert`-functie en zorg dat de aangeklikte tekst gemeld wordt aan de gebruiker.

Gebruik voor een 2e oplossingsvariant zowel de informatie uit de variabele `evt` als `this`. 

## Referenties
  * [Voorbeeld 02](../../examples/Fase02/README.md)
  * [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
