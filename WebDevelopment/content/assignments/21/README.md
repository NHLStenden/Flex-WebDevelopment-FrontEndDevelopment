# Opdracht 21 - Combinatie Modules, Classes, RestAPI en Template

In deze opdracht gaan we verder met wat we in andere opdrachten geleerd hebben. Ditmaal schrijf je een klasse `MyHttp` 
die opgenomen is in een Javascript module. Het doel van deze klasse is dat deze een aanroep doet naar een 
Internet REST-API voor het ophalen van gegevens.

De opgehaalde gegevens worden weergegeven in een tabel. De informatie die je ophaalt komt uit de OMDB. De API wordt
[hier](http://www.omdbapi.com/) beschreven. Gebruik API-key `89f91ba6`.

Om de gegevens weer te geven gaan we werken met het HTML5 `<template>`-element dat in Opdracht 19 behandeld is.  

Verder eisen aan de MyHttp-klasse:
  * Wordt geladen uit de map `/js/classes`
  * Maak gebruik van het JQuery framework
  * Maak gebruik van de jQuery functie `$.param()` om de URL-query string te bouwen 
  * Maak gebruik van `Promises` in de klasse `MyHttp` om het asynchrone van de REST-API aanroep op te vangen.
  
## Tips:
  * Denk goed na wat je in de MyHTTP-constructor wilt doen en wat in de functie die de informatie ophaalt
  * Laat de MyHTTP klasse functie die de informatie ophaalt een Promise-object teruggeven en handel deze in je
    "main" javascript verder af.
  
  
## Referenties
  * [MDN Classes](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Klasses)
  * [Google: JS Modules](https://developers.google.com/web/fundamentals/primers/modules)
  * [MDN Template](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
  * [W3Schools Templates](https://www.w3schools.com/tags/tag_template.asp)
  * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
