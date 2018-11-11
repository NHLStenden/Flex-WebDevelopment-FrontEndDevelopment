#Front End Website met basic Javascript - Fase 2
In de tweede variant werken we netjes met de broncode van de Javascript in 
een los bestand. Ook de stylesheet is verhuisd naar een los bestand. Typisch zet 
je deze in een eigen map (js en css).

Probleem is wel dat je niet precies weet wanneer je HTML klaar is om te
gebruiken in Javascript. Daarom gebruiken we de functie

```javascript
window.onload
```

Hier kun je een functie (anoniem of functienaam) aan toekennen die uitgevoerd wordt als de
HTML klaar is met laden ([Link naar MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)).

Tevens gaan we aan de slag met het concept van de DOM : het "Document Object Model".

Referenties:
  * [GetElementByID](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
  * [CreateElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  * [documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)
  